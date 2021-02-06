import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'checkout', pathMatch: 'prefix' },
      { path: 'home', component: LandingComponent },
      { path: 'checkout', component: CheckoutpageComponent },
      { path: 'booking-success', component: BookingSuccessComponent, canActivate: [AuthGuardService]  }  ,
     
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
