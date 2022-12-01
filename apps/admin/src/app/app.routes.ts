/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'libs/lib-ui/src/lib/component/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticleModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
