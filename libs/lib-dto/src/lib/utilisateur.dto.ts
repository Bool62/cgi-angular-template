export interface IUtilisateurDTO {
  id: number;
  login: string;
  nom: string;
  prenom: string;
  mail: string;
}

export const UTILISATEUR_DTO_MOCK: IUtilisateurDTO = {
  id: 1,
  login: 'alain.terrieur',
  nom: 'terrieur',
  prenom: 'alain',
  mail: 'alain.terrieur@mail.com',
};
