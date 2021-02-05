import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: 'input[mask]'
})
export class ExpiryDateDirective {
  constructor(private elRef: ElementRef) { } 
  @HostListener('input', ['$event']) onInputChange(event:any) {
    let initalValue = this.elRef.nativeElement.value;
    const trimmed = initalValue.replace(/\s+/g, '').slice(0, initalValue.indexOf('/')==-1?4:5);
    if (trimmed.length > 3) {
      this.elRef.nativeElement.value = `${trimmed.slice(0, 2)}/${trimmed.slice(trimmed.indexOf('/')==-1?2:3)}`
      return true;
    }
    else{
      return false;
    }
  }

}