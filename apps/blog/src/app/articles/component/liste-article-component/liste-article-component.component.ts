import { Component, Input } from '@angular/core';
import { IArticle } from '@cgi-template-angular/lib-model';


@Component({
  selector: 'cgi-template-angular-liste-article-component',
  templateUrl: './liste-article-component.component.html',
  styleUrls: ['./liste-article-component.component.scss'],
})
export class ListeArticleComponentComponent  {

  @Input() articles: IArticle[] | null = [];

}
