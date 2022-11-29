import {
  IUtilisateurDTO,
  UTILISATEUR_DTO_MOCK,
} from '@cgi-template-angular/lib-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilisateurService {
  getUtilisateurs(): IUtilisateurDTO[] {
    return [UTILISATEUR_DTO_MOCK, UTILISATEUR_DTO_MOCK];
  }

  getUtilisateurById(id: number): IUtilisateurDTO {
    return UTILISATEUR_DTO_MOCK;
  }
}
