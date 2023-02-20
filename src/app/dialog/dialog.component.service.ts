import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ReservationModel} from "../ReservationModel";

@Injectable({
  providedIn: 'root'
})
export class DialogComponentService{
  daaaata?: any;
  constructor(private http: HttpClient) {
     }

  public postReservation(ReservationToPost: ReservationModel) : Observable<Object>{
    return this.http.post('http://localhost:5132/Reservation' , ReservationToPost);
    }

  getReservationsCount(): Observable<number>  {
       return this.http.get<number>("http://localhost:5132/Reservation");
  }


}


