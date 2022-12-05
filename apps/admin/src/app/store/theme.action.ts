import { ITheme } from '@cgi-template-angular/lib-model';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ThemeAction {
  export class Load {
    static readonly type = '[Container] charger les themes';
  }
  export class LoadSuccess {
    static readonly type = '[Service] charger les themes success';
    constructor(public payload: { themes: ITheme[] }) {}
  }
}
