/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'libs/lib-ui/src/lib/component/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  /*
  {
    path: '',
    loadChildren: () =>
      import('./page/homepage/homepage.module').then((m) => m.HomepageModule),
  },*/

  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
