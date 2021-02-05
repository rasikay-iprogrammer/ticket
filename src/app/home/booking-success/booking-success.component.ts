import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css']
})
export class BookingSuccessComponent implements OnInit {

  constructor( private TicketService:TicketService) { }

  ngOnInit(): void {
    // if(this.TicketService.getTicketSummary().bookingId == ""){
    //   this.router.navigate(['/booking-success']);
    // }
  }

}
