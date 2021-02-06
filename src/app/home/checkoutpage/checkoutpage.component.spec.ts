import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { CheckoutpageComponent } from './checkoutpage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckoutpageComponent', () => {
  let component: CheckoutpageComponent;
  let fixture: ComponentFixture<CheckoutpageComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutpageComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        // reference the new instance of formBuilder from above
        { provide: FormBuilder, useValue: formBuilder }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutpageComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load page and remove padding', () => {
    const fixture = TestBed.createComponent(CheckoutpageComponent);
    component.form = formBuilder.group({
      paymentInfo: null,
      contactInfo: null
    });
    fixture.componentInstance.ngAfterViewInit();

  });
});
