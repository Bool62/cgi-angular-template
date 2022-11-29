import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class LibUiModule {}
