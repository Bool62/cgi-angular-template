import { ARTICLE_DTO_MOCK, IArticleDTO } from '@cgi-template-angular/lib-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getArticles(): IArticleDTO[] {
    return [ARTICLE_DTO_MOCK, ARTICLE_DTO_MOCK];
  }

  getArticleById(id: number): IArticleDTO {
    return ARTICLE_DTO_MOCK;
  }
}
