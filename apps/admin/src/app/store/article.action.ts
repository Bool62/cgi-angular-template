import { IArticle } from '@cgi-template-angular/lib-model';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticleAction {
  export class Load {
    static readonly type = '[Container] charger les articles';
  }
  export class LoadSuccess {
    static readonly type = '[Service] charger les articles success';
    constructor(public payload: { articles: IArticle[] }) {}
  }
  export class Add {
    static readonly type = '[Container] ajouter un article';
    constructor(public payload: { article: IArticle }) {}
  }
  export class AddSuccess {
    static readonly type = '[Service] ajouter un article success';
    constructor(public payload: { article: IArticle }) {}
  }
}
