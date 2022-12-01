import { IArticle } from '@cgi-template-angular/lib-model'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticleAction {
  export class Load {
    static readonly type = '[Container] charger les articles';
  }
  export class LoadSuccess {
    static readonly type = '[Service] charger les articles success';
    constructor(public payload: { articles: IArticle[] }) {}
  }

}
