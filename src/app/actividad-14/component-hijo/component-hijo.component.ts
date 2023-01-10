import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-hijo',
  templateUrl: './component-hijo.component.html',
  styleUrls: ['./component-hijo.component.css'],
})
export class ComponentHijoComponent {
  @Input() valores!: string;
}
