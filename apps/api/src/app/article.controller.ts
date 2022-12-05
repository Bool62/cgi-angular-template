import { IArticleDTO } from '@cgi-template-angular/lib-dto';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get('id')
  getArticleById(@Query('id') id: number) {
    return this.articleService.getArticleById(id);
  }

  @Post()
  async postArticlle(@Body() article: IArticleDTO): Promise<IArticleDTO> {
    return this.articleService.saveArticle(article);
  }
}
