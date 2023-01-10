import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]',
})
export class NumbersOnlyDirective {
  constructor(private readonly elRef: ElementRef) {}
  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void {
    // console.log(this.elRef.nativeElement.value);
    const numbersOnly = /[^0-9]*/g;
    const initValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initValue.replace(numbersOnly, '');
    if (initValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
