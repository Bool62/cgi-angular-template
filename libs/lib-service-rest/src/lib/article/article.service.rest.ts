import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleDTO } from '@cgi-template-angular/lib-dto'

/**
 * Rest Service for Facts
 */

@Injectable({ providedIn: 'root' })
export class ArticleRestService {
  /**
   * Constructor
   * @param httpClient Http client
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all facts
   * @returns List of fact + total of fact
   */
  public getArticles(): Observable<IArticleDTO[]> {
    return this.httpClient.get<IArticleDTO[]>('/api/article');
  }

  /**
   * Create fact
   * @param article fact to save
   * @returns fact saved
   */
  public postArticle(article: IArticleDTO): Observable<IArticleDTO> {
    return this.httpClient.post<IArticleDTO>('/api/article', article);
  }

}
