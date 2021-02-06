import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { PaymentOptionComponent } from '../payment-option/payment-option.component';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {
  form: FormGroup;
  @ViewChild(ContactInfoComponent) ContactInfoComponent: ContactInfoComponent = new ContactInfoComponent(this.formBuilder);
  @ViewChild(PaymentOptionComponent) PaymentOptionComponent: PaymentOptionComponent = new PaymentOptionComponent(this.formBuilder);

  activeTab: string = 'card';
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private TicketService: TicketService,
  ) {
    this.form = this.formBuilder.group({
      contactInfo: this.formBuilder.group({}),
      paymentInfo: this.formBuilder.group({})

    });
  }


  ngOnInit() {
  }

  changeTab(value: string) {
    this.activeTab = value;
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.ContactInfoComponent.form.valid && this.PaymentOptionComponent.form.valid) {
      let imgId = this.generateTempImageId();
      this.TicketService.getBookingSaveData().bookingId = imgId;
      localStorage.setItem("bookingId",imgId);
      this.TicketService.showSnackBar('Ticket Booked successfully.','alert-success')
      this.router.navigate(['/booking-success']);
    } else {
      this.TicketService.showSnackBar('Please enter all required field.','alert-danger');
      const ContactInfoComponent = this.ContactInfoComponent.form.controls;
      this.markAsTouch(ContactInfoComponent);
      const PaymentOptionComponent = this.PaymentOptionComponent.form.controls;
      this.markAsTouch(PaymentOptionComponent);
    }

  }
  generateTempImageId() {
    let id = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return id.toUpperCase();
  }

  markAsTouch(objectControl: any) {
    /** check form */
    Object.keys(objectControl).forEach(controlName =>
      objectControl[controlName].markAsTouched()
    );

  }
  expandPannel() {
    console.log("trueuuuu")
  }

}
