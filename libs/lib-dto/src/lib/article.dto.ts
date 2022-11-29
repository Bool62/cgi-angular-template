import { IThemeDTO, THEME_DTO_MOCK } from './theme.dto';
import { IUtilisateurDTO, UTILISATEUR_DTO_MOCK } from './utilisateur.dto';

export interface IArticleDTO {
  id: number;
  titre: string;
  auteur: IUtilisateurDTO;
  themes: IThemeDTO[];
}

export const ARTICLE_DTO_MOCK: IArticleDTO = {
  id: 1,
  titre: 'titre article',
  auteur: UTILISATEUR_DTO_MOCK,
  themes: [THEME_DTO_MOCK],
};
