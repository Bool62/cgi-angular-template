export interface IUtilisateur {
  id: number;
  login: string;
  nom: string;
  prenom: string;
  mail: string;
}

export const UTILISATEUR_MODEL_MOCK: IUtilisateur = {
  id: 1,
  login: 'alain.terrieur',
  nom: 'terrieur',
  prenom: 'alain',
  mail: 'alain.terrieur@mail.com',
};
