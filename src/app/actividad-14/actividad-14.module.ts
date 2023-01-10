import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';
import { CPadreComponent } from './c-padre/c-padre.component';

@NgModule({
  declarations: [FormComponent, ComponentHijoComponent, CPadreComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormComponent, CPadreComponent],
})
export class Actividad14Module {}
