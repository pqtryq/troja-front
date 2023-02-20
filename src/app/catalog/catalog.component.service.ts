import {Observable} from "rxjs";
import {TravelModel} from "../TravelModel";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CatalogComponentService{

  constructor(private http: HttpClient) {
     }

    public getTravel(Idtravel: number) : Observable<Object>{
      return this.http.get<TravelModel>('http://localhost:5132/Travel/' + Idtravel);
    }

}


// getTravel(Idtravel: number): Observable<TravelModel> {
//   return this.http.get<Travel>('localhost:5132/Travel/' + Idtravel);
// }
