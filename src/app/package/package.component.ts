import {Component, OnInit, ViewChild} from '@angular/core';
import {TravelModel} from "../TravelModel";
import {PackageComponentService} from "./package.component.service";


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css', '../../../src/assets/css/style.min.css', '../../../src/assets/css/style.css',
    '../../../src/assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../../src/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'  ]
})

export class PackageComponent implements OnInit {

  constructor(public service: PackageComponentService) {
  }

  ngOnInit() {
    this.getAllTravel();
  }

  display: boolean = false;
  loadDialogComponent : boolean = false;
  myTravel!: TravelModel;
  allTravels!: any[];
  travelsCount!: number;

  getAllTravel() {
    this.service.getAllTravel().subscribe((data: any) => {
      this.allTravels = data;
    })
  }

  getTravelDays(date1: Date, date2:Date){
    let start = new Date(date1);
    let end = new Date(date2);
    let diffInDays = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    let daysString;
    if (diffInDays==1) daysString = " dzień";
    if (diffInDays>1) daysString = " dni";
    return(diffInDays.toString()+daysString);
  }


  displayTrue(travelId:number, xcord:number, ycord:number, x:any) {
    this.service.visibleTrue(travelId, xcord, ycord, x);
  }

  whereTravel(idCountry:number){
    let country!: string;
    if(idCountry==1) country = "Polska";
    if(idCountry==2) country = "Francja";
    if(idCountry==3) country = "Hiszpania";
    if(idCountry==4) country = "Portugalia";
    if(idCountry==5) country = "Grecja";
    if(idCountry==6) country = "Turcja";
    if(idCountry==7) country = "Tajlandia";
    if(idCountry==8) country = "Malediwy";

    return country;
  }

  getTravel(Idtravel: number) {
    this.service.getTravel(Idtravel).subscribe((data: any) => {
      this.myTravel = data;
      return this.myTravel;
    })
  }

  getTravelsCount() {
    this.service.getTravelsCount().subscribe((data: any) => {
      this.travelsCount = data;
      this.getAllTravel();
    })
  }

}
