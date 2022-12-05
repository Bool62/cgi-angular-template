import { Component, OnInit } from '@angular/core';
import { IArticle } from '@cgi-template-angular/lib-model';
import { Store } from '@ngxs/store';
import { ArticleAction } from '../../../store/article.action';
import { ThemeAction } from '../../../store/theme.action';

@Component({
  selector: 'cgi-template-angular-ajout-article-container',
  templateUrl: './ajout-article-container.component.html',
  styleUrls: ['./ajout-article-container.component.scss'],
})
export class AjoutArticleContainerComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ThemeAction.Load());
  }

  onAjouter(article: IArticle): void {
    this.store.dispatch(new ArticleAction.Add({ article: article }));
  }
}
