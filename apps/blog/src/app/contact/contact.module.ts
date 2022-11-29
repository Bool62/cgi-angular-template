import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactComponentComponent } from './component/contact-component/contact-component.component';
import { ContactRoutingRoutingModule } from './contact-routing.module';
import { ContactContainerComponent } from './container/contact-container/contact-container.component';

@NgModule({
  declarations: [ContactComponentComponent, ContactContainerComponent],
  imports: [
    CommonModule,
    ContactRoutingRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
