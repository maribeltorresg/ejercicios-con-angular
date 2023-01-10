import { Component } from '@angular/core';

@Component({
  selector: 'app-c-padre',
  templateUrl: './c-padre.component.html',
  styleUrls: ['./c-padre.component.css'],
})
export class CPadreComponent {
  form: any;

  agregarCampo(form: any) {
    this.form = form;
    console.log(this.form);
  }
}
