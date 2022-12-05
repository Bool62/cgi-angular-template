import { Injectable } from '@angular/core';
import { ArticleRestService } from '@cgi-template-angular/lib-service-rest';
import { IArticleDTO } from '@cgi-template-angular/lib-dto';
import { IArticle } from '@cgi-template-angular/lib-model';

import { map, Observable } from 'rxjs';

/**
 * Domain Service for Fact
 */

@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private articleRestService: ArticleRestService) {}

  /**
   * Get all facts
   * @returns List of facts
   */
  public getArticles(): Observable<IArticle[]> {
    return this.articleRestService.getArticles().pipe(
      map((data) => {
        return data.map((item) => {
          return this.mappingIArticleDTOToIArticle(item);
        });
      })
    );
  }

  public postArticle(article: IArticle): Observable<IArticle> {
    return this.articleRestService
      .postArticle(this.mappingIArticleToIArticleDTO(article))
      .pipe(
        map((data) => {
          return this.mappingIArticleDTOToIArticle(data);
        })
      );
  }

  /**
   * Mapping object Rest To object Domain
   * @param rest rest Object
   * @returns domain object
   */
  private mappingIArticleDTOToIArticle(rest: IArticleDTO): IArticle {
    return {
      id: rest.id,
      auteur: rest.auteur,
      themes: rest.themes,
      titre: rest.titre,
    };
  }

  /**
   * Mapping object Domain To object Rest
   * @param fact domain object
   * @returns rest object
   */
  private mappingIArticleToIArticleDTO(article: IArticle): IArticleDTO {
    return {
      id: article.id,
      auteur: article.auteur,
      themes: article.themes,
      titre: article.titre,
    };
  }
}
