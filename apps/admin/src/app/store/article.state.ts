import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from '@cgi-template-angular/lib-model';
import { ArticleService } from '@cgi-template-angular/lib-service-metier';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { switchMap } from 'rxjs';
import { ArticleAction } from './article.action';

export interface ArticleStateModel {
  ids: number[];
  articles: Map<number, IArticle>;
  count: number;
}

@State<ArticleStateModel>({
  name: 'article',
  defaults: {
    ids: [],
    articles: new Map<number, IArticle>(),
    count: 0,
  },
})
@Injectable()
export class ArticleState {
  constructor(private articleService: ArticleService, private router: Router) {}

  @Selector()
  static count(state: ArticleStateModel): number {
    return state.count;
  }

  @Selector()
  static articles(state: ArticleStateModel): IArticle[] {
    return Array.from(state.articles.values());
  }

  static articleById(idFact: number) {
    return createSelector([ArticleState], (state: ArticleStateModel) => {
      return state.articles.get(idFact);
    });
  }

  @Action(ArticleAction.Load)
  reducerLoad(ctx: StateContext<ArticleStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      ids: [],
      articles: new Map<number, IArticle>(),
      count: 0,
    });

    return this.articleService.getArticles().pipe(
      switchMap((articles: IArticle[]) => {
        return ctx.dispatch(
          new ArticleAction.LoadSuccess({ articles: articles })
        );
      })
    );
  }

  @Action(ArticleAction.LoadSuccess)
  effectLoadSuccess(
    ctx: StateContext<ArticleStateModel>,
    action: ArticleAction.LoadSuccess
  ) {
    const ids: number[] = [];
    const articles: Map<number, IArticle> = new Map<number, IArticle>();

    for (const article of action.payload.articles) {
      if (article.id) {
        articles.set(article.id, article);
        ids.push(article.id);
      }
    }

    return ctx.patchState({
      ids: ids,
      articles: articles,
      count: action.payload.articles.length,
    });
  }

  @Action(ArticleAction.Add)
  reducerAdd(ctx: StateContext<ArticleStateModel>, action: ArticleAction.Add) {
    return this.articleService.postArticle(action.payload.article).pipe(
      switchMap((article: IArticle) => {
        return ctx.dispatch(new ArticleAction.AddSuccess({ article: article }));
      })
    );
  }

  @Action(ArticleAction.AddSuccess)
  effectAddSuccess(
    ctx: StateContext<ArticleStateModel>,
    action: ArticleAction.AddSuccess
  ) {
    const state = ctx.getState();
    const ids: number[] = [];
    const articles: Map<number, IArticle> = new Map<number, IArticle>();

    state.articles.forEach((article) => {
      articles.set(article.id, article);
      ids.push(article.id);
    });

    articles.set(action.payload.article.id, action.payload.article);
    ids.push(action.payload.article.id);

    return ctx.patchState({
      ids: ids,
      articles: articles,
      count: ids.length,
    });
  }
}
