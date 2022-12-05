import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IArticle } from '@cgi-template-angular/lib-model';

@Component({
  selector: 'cgi-template-angular-ajout-article-component',
  templateUrl: './ajout-article-component.component.html',
  styleUrls: ['./ajout-article-component.component.scss'],
})
export class AjoutArticleComponentComponent implements OnInit {
  @Output() ajouter: EventEmitter<IArticle> = new EventEmitter<IArticle>();

  public formAjout: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    //Init avec l'utilisateur courant
    auteur: new FormControl('alex.terrieur', [Validators.required]),
    theme: new FormControl('', []),
  });

  constructor() {}

  ngOnInit(): void {}

  onAjout(): void {
    this.ajouter.emit({
      id: 0,
      auteur: {
        id: 2,
        login: this.formAjout.controls['auteur'].value,
        mail: 'alex.terrieur@mail.com',
        nom: 'terrieur',
        prenom: 'alex',
      },
      themes: this.formAjout.controls['theme'].value,
      titre: this.formAjout.controls['titre'].value,
    });
  }
}
