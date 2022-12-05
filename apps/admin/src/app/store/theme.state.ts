import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITheme } from '@cgi-template-angular/lib-model';
import {
  ThemeService
} from '@cgi-template-angular/lib-service-metier';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext
} from '@ngxs/store';
import { switchMap } from 'rxjs';
import { ThemeAction } from './theme.action';

export interface ThemeStateModel {
  ids: number[];
  themes: Map<number, ITheme>;
  count: number;
}

@State<ThemeStateModel>({
  name: 'theme',
  defaults: {
    ids: [],
    themes: new Map<number, ITheme>(),
    count: 0,
  },
})
@Injectable()
export class ThemeState {
  constructor(private themeService: ThemeService, private router: Router) {}

  @Selector()
  static count(state: ThemeStateModel): number {
    return state.count;
  }

  @Selector()
  static themes(state: ThemeStateModel): ITheme[] {
    return Array.from(state.themes.values());
  }

  static articleById(idFact: number) {
    return createSelector([ThemeState], (state: ThemeStateModel) => {
      return state.themes.get(idFact);
    });
  }

  @Action(ThemeAction.Load)
  reducerLoad(ctx: StateContext<ThemeStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      ids: [],
      themes: new Map<number, ITheme>(),
      count: 0,
    });

    return this.themeService.getThemes().pipe(
      switchMap((themes: ITheme[]) => {
        return ctx.dispatch(new ThemeAction.LoadSuccess({ themes: themes }));
      })
    );
  }

  @Action(ThemeAction.LoadSuccess)
  effectLoadSuccess(
    ctx: StateContext<ThemeStateModel>,
    action: ThemeAction.LoadSuccess
  ) {
    const ids: number[] = [];
    const themes: Map<number, ITheme> = new Map<number, ITheme>();

    for (const theme of action.payload.themes) {
      if (theme.id) {
        themes.set(theme.id, theme);
        ids.push(theme.id);
      }
    }

    return ctx.patchState({
      ids: ids,
      themes: themes,
      count: action.payload.themes.length,
    });
  }
}
