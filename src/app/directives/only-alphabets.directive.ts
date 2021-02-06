import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabets]'
})
export class OnlyAlphabetsDirective {
  constructor(public el: ElementRef) {
    this.el.nativeElement.onkeypress = (evt: any) => {
      if (!((evt.which >= 97 && evt.which <= 122) || (evt.which >= 65 && evt.which <= 90) || (evt.which == 32 ) )) {
        evt.preventDefault();
      }
    };
  }

}
