import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cgi-template-angular-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss'],
})
export class ContactComponentComponent {
  public formContact: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('', [Validators.required]),
  });

  /**
   * Transmission du formulaire de contact
   */
  public contact(): void {
    //TODO
    console.log('');
  }

  public errorHandling(control: string, error: string) {
    return this.formContact.controls[control].hasError(error);
  }
}
