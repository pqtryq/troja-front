import {Component, OnInit} from '@angular/core';
import {TravelModel} from "../TravelModel";
import {CatalogComponentService} from "./catalog.component.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css', '../../../src/assets/css/style.min.css', '../../../src/assets/css/style.css',
    '../../../src/assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../../src/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'  ]
})
export class CatalogComponent implements OnInit{

  //Idtravel: number;
  myTravel!: TravelModel;

  constructor(private service: CatalogComponentService ) {
  }

  getTravel(Idtravel:number){
    this.service.getTravel(Idtravel).subscribe((data:any)=> {
      this.myTravel = data;
      console.log(data);
    })
  }
  ngOnInit() {

  }

}
