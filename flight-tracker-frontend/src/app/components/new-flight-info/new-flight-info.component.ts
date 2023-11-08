import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Airline } from 'src/app/common/airline';
import { Flight } from 'src/app/common/flight';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-new-flight-info',
  templateUrl: './new-flight-info.component.html',
  styleUrls: ['./new-flight-info.component.css']
})
export class NewFlightInfoComponent {

  airlines: Airline[] = [];
  flights: Flight[] = [];

  constructor(private formBuilder: FormBuilder, private airlineService: AirlineService){}

  ngOnInit(): void{
    // Populate airlines
    this.getAirlines();


  }
  // Populate airlines
  getAirlines(){
    this.airlineService.getAirlineList().subscribe(
      data => {
        this.airlines = data;
        // console.log(data);
      }
    )
  }

  // Get airline that user selected
  // Populate flight based on airline selected
  getFlight(value: any){
    console.log("Airlines: "+ value.target.value);
    const airlineCode = value.target.value.slice(-2);

    this.airlineService.getFlightsByAirlineCode(airlineCode).subscribe(
      data => {
        this.flights = data;
        console.log(data)
      }
    )
  }


}
