import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticleContainerComponent } from './container/liste-article-container/liste-article-container.component';

const routes: Routes = [{ path: '', component: ListeArticleContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
