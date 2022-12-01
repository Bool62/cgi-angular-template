import { Component, OnInit } from '@angular/core';
import { IArticle } from '@cgi-template-angular/lib-model';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { ArticleAction } from '../../../store/article.action';
import { ArticleState } from '../../../store/article.state';

@Component({
  selector: 'cgi-template-angular-liste-article-container',
  templateUrl: './liste-article-container.component.html',
  styleUrls: ['./liste-article-container.component.scss'],
})
export class ListeArticleContainerComponent implements OnInit {
  articles$: Observable<IArticle[]> = of([]);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ArticleAction.Load());

    this.articles$ = this.store.select(ArticleState.articles);
  }
}
