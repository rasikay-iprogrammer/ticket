import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'checkout', pathMatch: 'prefix' },
      { path: 'checkout', component: CheckoutpageComponent },
      { path: 'booking-success', component: BookingSuccessComponent }  

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
