import { Controller, Get, Query } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  getUtilisateurs() {
    return this.utilisateurService.getUtilisateurs();
  }

  @Get('id')
  getUtilisateurById(@Query('id') id: number) {
    return this.utilisateurService.getUtilisateurById(id);
  }
}
