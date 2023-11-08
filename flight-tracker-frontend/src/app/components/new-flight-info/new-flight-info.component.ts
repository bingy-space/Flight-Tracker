import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Airline } from 'src/app/common/airline';
import { Flight } from 'src/app/common/flight';
import { Gate } from 'src/app/common/gate';
import { Status } from 'src/app/common/status';
import { AirlineService } from 'src/app/services/airline.service';
import { FlightInfoService } from 'src/app/services/flight-info.service';

@Component({
  selector: 'app-new-flight-info',
  templateUrl: './new-flight-info.component.html',
  styleUrls: ['./new-flight-info.component.css']
})
export class NewFlightInfoComponent {

  airlines: Airline[] = [];
  flights: Flight[] = [];
  status: Status[] = [];
  gates: Gate[] = [];

  constructor(private formBuilder: FormBuilder, 
              private airlineService: AirlineService, 
              private flightInfoService: FlightInfoService) { }

  ngOnInit(): void {
    // Populate airlines, status, and gates
    this.getAirlines();
    this.getStatus();
    this.getGates();

  }
  // Populate airlines
  getAirlines() {
    this.airlineService.getAirlineList().subscribe(
      data => {
        this.airlines = data;
        // console.log(data);
      }
    )
  }

  // Get airline that user selected
  // Populate flight based on airline selected
  getFlight(value: any) {
    console.log("Airlines: " + value.target.value);
    const airlineCode = value.target.value.slice(-2);

    this.airlineService.getFlightsByAirlineCode(airlineCode).subscribe(
      data => {
        this.flights = data;
        console.log(data)
      }
    )
  }

  // Populate status
  getStatus() {
    this.flightInfoService.getStatus().subscribe(
      data => {
        this.status = data;
        console.log(data);
      }
    )
  }

  // Populate gates
  getGates(){
    this.flightInfoService.getGate().subscribe(
      data => {
        this.gates = data;
        console.log(data);
      }
    )
  }

}
