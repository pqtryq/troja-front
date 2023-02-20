import {FormControl} from "@angular/forms";

export interface ReservationModel{

  Idreservation: number,
  Firstname: string,
  Lastname: string,
  Phonenumber: string,
  Nop: number,
  Idtravel: number,
  Comments: string,
  Orderdatetime: Date

}
