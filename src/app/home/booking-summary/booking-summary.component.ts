import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';
import { Ticketinfo } from '../../model/ticketinfo.model';
import { TicketConstants } from '../../globals/global.constants';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  constructor(private ticketService:TicketService) { }
  public ticketinfo : Ticketinfo= {
    movieName: '',
    grade: '',
    language: '',
    seatNo: '',
    bookDateTime: new Date(),
    theaterName: '',
    total:0
  };
  globalConst  = TicketConstants;
  ngOnInit(): void {
    this.ticketinfo = this.ticketService.getTicketSummary();
    this.calculateAmount();
    console.log(this.ticketinfo)
  }

  calculateAmount(){
  
    this.ticketinfo.gstAmount = ( (TicketConstants.gstPercentage /100) * Number(this.ticketinfo.total));
    this.ticketinfo.finalTotal = Number((Number(this.ticketinfo.total) + this.ticketinfo.gstAmount).toFixed(2)) ;

  }
}
