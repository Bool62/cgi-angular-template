import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticleController,
    ThemeController,
    UtilisateurController,
  ],
  providers: [AppService, ArticleService, ThemeService, UtilisateurService],
})
export class AppModule {}
