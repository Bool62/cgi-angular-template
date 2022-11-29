import { ITheme, THEME_MODEL_MOCK } from './theme.model';
import { IUtilisateur, UTILISATEUR_MODEL_MOCK } from './utilisateur.model';

export interface IArticle {
  id: number;
  titre: string;
  auteur: IUtilisateur;
  themes: ITheme[];
}

export const ARTICLE_MODEL_MOCK: IArticle = {
  id: 1,
  titre: 'titre article',
  auteur: UTILISATEUR_MODEL_MOCK,
  themes: [THEME_MODEL_MOCK],
};
