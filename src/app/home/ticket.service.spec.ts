import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MatSnackBarModule 
      ],
      providers: [
        TicketService
    ]
    })
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
