import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactInfoComponent } from './contact-info.component';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    component.form.controls.phoneNumber.setValue('');
    component.form.controls.email.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    email.setValue("rasika@test.com");
    expect(email.hasError('required')).toBeFalsy();
    expect(email.hasError('pattern')).toBeFalsy();
  });
  it('phone field validity', () => {
    const phone = component.form.controls.phoneNumber;
    expect(phone.valid).toBeFalsy();
    phone.setValue('9561343097');
    expect(phone.hasError('required')).toBeFalsy();
    expect(phone.hasError('pattern')).toBeFalsy();

  });

});
