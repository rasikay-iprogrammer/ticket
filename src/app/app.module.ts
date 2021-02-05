import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  bootstrap: [AppComponent]
})
export class AppModule { }
