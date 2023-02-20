import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TravelModel} from "../TravelModel";
import { IndexComponent } from './index.component';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


