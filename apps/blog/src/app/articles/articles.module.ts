import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArticleRoutingModule } from './articles-routing.module';
import { ListeArticleComponentComponent } from './component/liste-article-component/liste-article-component.component';
import { ListeArticleContainerComponent } from './container/liste-article-container/liste-article-container.component';

@NgModule({
  declarations: [
    ListeArticleComponentComponent,
    ListeArticleContainerComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ArticleModule {}
