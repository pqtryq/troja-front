import {Component, OnInit} from '@angular/core';
import {IndexComponentService} from "./index.component.service";
import {TravelModel} from "../TravelModel";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../../../src/assets/css/style.min.css', '../../../src/assets/css/style.css',
              '../../../src/assets/lib/owlcarousel/assets/owl.carousel.min.css',
              '../../../src/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'  ]
})
export class IndexComponent implements OnInit{

  FormData!: FormGroup;
  myTravel!: TravelModel;

  constructor(private service: IndexComponentService , private builder: FormBuilder) {

  }

  getTravel(Idtravel:number){
    this.service.getTravel(Idtravel).subscribe((data:any)=> {
      this.myTravel = data;
      console.log(data);
    })
  }
  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl(''),
      Email: new FormControl('', [Validators.email]),
      Comment: new FormControl('')
    })
  }
}



