import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleContainerComponent } from './container/ajout-article-container/ajout-article-container.component';
import { ListeArticleContainerComponent } from './container/liste-article-container/liste-article-container.component';

const routes: Routes = [
  { path: '', component: ListeArticleContainerComponent },
  { path: 'ajout', component: AjoutArticleContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
