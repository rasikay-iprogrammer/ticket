import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './home/home.module';
import {TicketService} from './home/ticket.service';
// import { ExpiryDateDirective } from './directives/expiry-date.directive'
@NgModule({
  declarations: [
    AppComponent,
    // ExpiryDateDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,

    // HomeModule,
  ],
  exports:[],

  providers: [TicketService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
