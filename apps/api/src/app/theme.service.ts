import { IThemeDTO, THEME_DTO_MOCK } from '@cgi-template-angular/lib-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThemeService {
  getThemes(): IThemeDTO[] {
    return [THEME_DTO_MOCK, THEME_DTO_MOCK];
  }

  getThemeById(id: number): IThemeDTO {
    return THEME_DTO_MOCK;
  }
}
