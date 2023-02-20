import {Observable} from "rxjs";
import {TravelModel} from "../TravelModel";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PackageComponentService{
  visible: boolean = false;
  globalTravelId!: number ;
  globalXCord!: number;
  globalYCord!: number;
  globalPrice!: number;
  globalStartDate!: Date;
  globalEndDate!: Date;
  object!:any;
  constructor(private http: HttpClient) {
  }

  public visibleTrue(travelId:number, xcord:number, ycord:number, x:any){
    this.globalTravelId = travelId;
    this.globalXCord = xcord;
    this.globalYCord = ycord;
    this.object = x;
    this.visible = true;
  }

  public visibleFalse(){
    this.visible = false;
  }
  public getAllTravel() : Observable<TravelModel[]>{
    return this.http.get<TravelModel[]>('http://localhost:5132/Travel');
  }

  public getTravel(Idtravel: number) : Observable<TravelModel>{
    return this.http.get<TravelModel>('http://localhost:5132/Travel/' + Idtravel);
  }

  public getTravelsCount() : Observable<number>{
    return this.http.get<number>('http://localhost:5132/Travel/Count' );
  }

  showTravelId(){
    return this.globalTravelId;
  }
  showXCord(){
    return this.globalXCord;
  }
  showYCord(){
    return this.globalYCord;
  }

  showGlobalPrice(){
    return this.object.price;
  }
  showGlobalStartDate(){
    return this.object.startdate;
  }
  showGlobalEndDate(){
    return this.object.enddate;
  }

  showHotel(){
    return this.object.hotel;
  }


}
