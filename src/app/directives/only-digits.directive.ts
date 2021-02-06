import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]'
})
export class OnlyDigitsDirective {

  constructor(public el: ElementRef) {

    this.el.nativeElement.onkeypress = (evt:any) => {
        if (evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    };

}

}