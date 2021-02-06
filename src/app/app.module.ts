import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './home/home.module';
import {TicketService} from './home/ticket.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { OnlyAlphabetsDirective } from './directives/only-alphabets.directive';
// import { CardNumberMaskDirective } from './directives/card-number-mask.directive';
// import { ExpiryDateDirective } from './directives/expiry-date.directive'
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // OnlyAlphabetsDirective,
    // CardNumberMaskDirective,
    // ExpiryDateDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
    // HomeModule,
  ],
  exports:[],

  providers: [TicketService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
