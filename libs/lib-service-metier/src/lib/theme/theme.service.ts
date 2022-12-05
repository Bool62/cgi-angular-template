import { Injectable } from '@angular/core';
import { IThemeDTO } from '@cgi-template-angular/lib-dto';
import { ITheme } from '@cgi-template-angular/lib-model';
import {
  ThemeRestService
} from '@cgi-template-angular/lib-service-rest';
import { map, Observable } from 'rxjs';


/**
 * Domain Service for Fact
 */

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private themeRestService: ThemeRestService) {}

  /**
   * Get all facts
   * @returns List of facts
   */
  public getThemes(): Observable<ITheme[]> {
    return this.themeRestService.getThemes().pipe(
      map((data) => {
        return data.map((item) => {
          return this.mappingIThemeDTOToITheme(item);
        });
      })
    );
  }

  /**
   * Mapping object Rest To object Domain
   * @param rest rest Object
   * @returns domain object
   */
  private mappingIThemeDTOToITheme(rest: IThemeDTO): ITheme {
    return {
      id: rest.id,
      libelle: rest.libelle,
    };
  }
}
