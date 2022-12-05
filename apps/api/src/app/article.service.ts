import { ARTICLE_DTO_MOCK, IArticleDTO } from '@cgi-template-angular/lib-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  articles: IArticleDTO[] = [ARTICLE_DTO_MOCK, { ...ARTICLE_DTO_MOCK, id: 2 }];

  getArticles(): IArticleDTO[] {
    return this.articles;
  }

  getArticleById(id: number): IArticleDTO {
    return ARTICLE_DTO_MOCK;
  }

  saveArticle(article: IArticleDTO): IArticleDTO {
    //Attention solution pour demo non fonctionnel en cas réel
    const articleSaved: IArticleDTO = {
      ...article,
      id: this.articles.length + 1,
    };
    this.articles.push(articleSaved);
    return articleSaved;
  }
}
