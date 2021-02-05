import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import {MaterialModule} from '../material/material.module'
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { SubHeaderComponent } from '../layout/sub-header/sub-header.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { ExpiryDateDirective } from '../directives/expiry-date.directive'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    
  ],
  declarations: [HomeComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    CheckoutpageComponent,
    ContactInfoComponent,
    PaymentOptionComponent,
    BookingSummaryComponent,
    BookingSuccessComponent,
    ExpiryDateDirective
  ]
})
export class HomeModule { }
