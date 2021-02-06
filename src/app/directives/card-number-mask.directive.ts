import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardNumberMask]'
})
export class CardNumberMaskDirective {

  constructor(private elRef: ElementRef) { } 
  @HostListener('input', ['$event']) onInputChange(event:any) {
    const input = event.target as HTMLInputElement;
console.log("ddsd")
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    // let initalValue = this.elRef.nativeElement.value;
    // const trimmed = initalValue.replace(/\s+/g, '').slice(0, initalValue.indexOf('/')==-1?4:5);


    
    // if (trimmed.length > 3) {
    //   this.elRef.nativeElement.value = `${trimmed.slice(0, 2)}/${trimmed.slice(trimmed.indexOf('/')==-1?2:3)}`
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }

}
