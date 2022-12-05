import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IThemeDTO } from '@cgi-template-angular/lib-dto';
import { Observable } from 'rxjs';

/**
 * Rest Service for Facts
 */

@Injectable({ providedIn: 'root' })
export class ThemeRestService {
  /**
   * Constructor
   * @param httpClient Http client
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all facts
   * @returns List of fact + total of fact
   */
  public getThemes(): Observable<IThemeDTO[]> {
    return this.httpClient.get<IThemeDTO[]>('/api/theme');
  }


}
