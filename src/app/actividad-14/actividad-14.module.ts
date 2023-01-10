import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';

@NgModule({
  declarations: [FormComponent, ComponentHijoComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormComponent, ComponentHijoComponent],
})
export class Actividad14Module {}
