import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cgi-template-angular-ajout-article-component',
  templateUrl: './ajout-article-component.component.html',
  styleUrls: ['./ajout-article-component.component.scss'],
})
export class AjoutArticleComponentComponent implements OnInit {
  public formAjout: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    //Init avec l'utilisateur courant
    auteur: new FormControl('1', [Validators.required]),
    theme: new FormControl('', []),
  });

  constructor() {}

  ngOnInit(): void {}

  ajout(): void {}
}
