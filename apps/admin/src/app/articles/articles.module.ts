import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArticleRoutingModule } from './articles-routing.module';
import { ListeArticleComponentComponent } from './component/liste-article-component/liste-article-component.component';
import { ListeArticleContainerComponent } from './container/liste-article-container/liste-article-container.component';
import { MatCardModule } from '@angular/material/card';
import { AjoutArticleContainerComponent } from './container/ajout-article-container/ajout-article-container.component';
import { AjoutArticleComponentComponent } from './component/ajout-article-component/ajout-article-component.component';

@NgModule({
  declarations: [
    ListeArticleComponentComponent,
    ListeArticleContainerComponent,
    AjoutArticleContainerComponent,
    AjoutArticleComponentComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,

  ],
})
export class ArticleModule {}
