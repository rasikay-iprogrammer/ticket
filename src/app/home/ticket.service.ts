import { Injectable } from '@angular/core';
import { Ticketinfo } from '../model/ticketinfo.model';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketData: Ticketinfo = {
  };
  constructor() { }
  setBookingInfo(){
    this.ticketData = {
      movieName: 'Kill Bill',
      grade: 'A',
      language: 'English',
      seatNo: 'EXECUTIV - H10, H11, H12, H13, H7, H8, H9',
      bookDateTime: new Date('Thu, 23 Jun, 2019 7:20 PM'),
      theaterName: 'Cinepolis: Orion East Mall (AUDI 8)',
      total:1652,
      gstAmount:0,
      finalTotal:0
    }
  }
  getTicketSummary() {    
    return  this.ticketData;
  }
}
