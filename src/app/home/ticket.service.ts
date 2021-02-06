import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Ticketinfo } from '../model/ticketinfo.model';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketData: Ticketinfo = {
  };
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar
    ) { }

  public getTicketSummary(): Observable<any> {
    return this.http.get("https://my-json-server.typicode.com/rasikay-iprogrammer/demo/blob/main/movieInfo");

  }
  setBookingInfo(obj:any){
    this.ticketData = obj
  }
  getBookingSaveData(){
    return  this.ticketData;
  }
  showSnackBar(text:any,className:any){
    this._snackBar.open(text, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass:className
    });
  }
}
