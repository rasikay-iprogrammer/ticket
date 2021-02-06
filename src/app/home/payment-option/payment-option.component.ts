import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Payment } from 'src/app/model/payment.model';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.scss']
})
export class PaymentOptionComponent implements OnInit {
  form: FormGroup;
  paymentArr: Payment = new Payment();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      creditCardNumber: [this.paymentArr.creditCardNumber, [Validators.required,Validators.minLength(19)]],
      nameOnCard: [this.paymentArr.nameOnCard, [Validators.required]],
      expiryDate: [this.paymentArr.expiryDate, [Validators.required]],
      cvv: [this.paymentArr.cvv, [Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }
}
