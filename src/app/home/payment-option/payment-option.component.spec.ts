import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentOptionComponent } from './payment-option.component';

describe('PaymentOptionComponent', () => {
  let component: PaymentOptionComponent;
  let fixture: ComponentFixture<PaymentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOptionComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    component.form.controls.creditCardNumber.setValue('');
    component.form.controls.nameOnCard.setValue('');
    component.form.controls.expiryDate.setValue('');
    component.form.controls.cvv.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('credit/debit card field validity', () => {
    let creditCardNumber = component.form.controls['creditCardNumber'];
    expect(creditCardNumber.valid).toBeFalsy();
    creditCardNumber.setValue("1231234567891234");
    expect(creditCardNumber.hasError('required')).toBeFalsy();
    expect(creditCardNumber.hasError('pattern')).toBeFalsy();
  });
  it('card expiry field validity', () => {
    let expiryDate = component.form.controls['expiryDate'];
    expect(expiryDate.valid).toBeFalsy();
    expiryDate.setValue("02/30");
    expect(expiryDate.hasError('required')).toBeFalsy();
  });
  it('card cvv field validity', () => {
    let cvv = component.form.controls['cvv'];
    expect(cvv.valid).toBeFalsy();
    cvv.setValue("123");
    expect(cvv.hasError('required')).toBeFalsy();
  });
});
