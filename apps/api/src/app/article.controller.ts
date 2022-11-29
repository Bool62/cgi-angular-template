import { Controller, Get, Query } from '@nestjs/common';

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
}
