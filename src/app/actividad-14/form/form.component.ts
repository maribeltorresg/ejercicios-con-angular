import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  nombre: string;
  dni: string;
  estado_civil: string;
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

  @Output() formSubmit = new EventEmitter<ContactForm>();

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
  }
}
