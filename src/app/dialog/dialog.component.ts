import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {PackageComponentService} from "../package/package.component.service";
import {ReservationModel} from "../ReservationModel";
import {DialogComponentService} from "./dialog.component.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css', '../../../src/assets/css/style.min.css', '../../../src/assets/css/style.css',
    '../../../src/assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../../src/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css' ],
})
export class DialogComponent implements OnInit{
  ReservationFormGroup!: FormGroup ;
  currentDateTime:Date;

  echIdRes : number = 0;
  liczba!:number;

  constructor(private service:DialogComponentService, private service2:PackageComponentService, public fb: FormBuilder,) {

    this.currentDateTime = new Date();

    this.ReservationFormGroup = this.fb.group({
      Idreservation: new FormControl(''),
      Firstname: new FormControl(''),
      Lastname: new FormControl(''),
      Phonenumber: new FormControl(''),
      Nop: new FormControl(''),
      Idtravel: new FormControl(''),
      Comments: new FormControl(''),
      Orderdatetime: new FormControl('')
    });

    this.service.getReservationsCount().subscribe(value => {
      this.liczba = value;
    });

  }

  get firstName() {
    return this.ReservationFormGroup.get('Firstname');
  }
  get lastName() {
    return this.ReservationFormGroup.get('Lastname');
  }
  get phoneNumber() {
    return this.ReservationFormGroup.get('Phonenumber');
  }
  get noP() {
    return this.ReservationFormGroup.get('Nop');
  }
  get comments() {
    return this.ReservationFormGroup.get('Comments');
  }

  get sumPrice(){
    return this.service2.showGlobalPrice()*this.noP?.value
  }

  get startDate(){
    return this.service2.showGlobalStartDate()
  }
  get endDate(){
    return this.service2.showGlobalEndDate()
  }
  get hotel(){
    return this.service2.showHotel()
  }


  sendReservation(){
    let resCount = this.service.getReservationsCount();
    let travelId: number = this.service2.showTravelId();
    let ReservationPost : ReservationModel = {
      Idreservation: this.echIdRes,
      Firstname: this.firstName?.value,
      Lastname: this.lastName?.value,
      Phonenumber: this.phoneNumber?.value,
      Nop: this.noP?.value,
      Idtravel:travelId,
      Comments:this.comments?.value,
      Orderdatetime: this.currentDateTime
    }
    this.service.postReservation(ReservationPost).subscribe();

    this.service2.visibleFalse();
    this.echIdRes++;
  }

  ngOnInit(): void {
  }

  display: any;

  center: google.maps.LatLngLiteral = {
    //lat: 52.25632442147779,
   /// lng: 20.900562675646295
    lat: parseFloat(this.service2.showXCord().toString()),
    lng: parseFloat(this.service2.showYCord().toString())
  };
  zoom = 15;

  // moveMap(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.center = (event.latLng.toJSON());
  // }
  //
  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.display = event.latLng.toJSON();
  // }




}




