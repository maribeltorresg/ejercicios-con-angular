import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  dni: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  model = {
    nombre: '',
    dni: '',
    estado_civil: '',
  };

  formValues: any = '';

  @Output() formSubmit = new EventEmitter<ContactForm>();

  onSubmit(form: NgForm): void {
    // console.log('Form values', form.value);
    this.formValues = form.value;

    this.formSubmit.emit(form.value);
  }
}
