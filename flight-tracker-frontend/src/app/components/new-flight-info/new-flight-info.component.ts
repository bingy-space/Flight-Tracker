import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Airline } from 'src/app/common/airline';
import { Flight } from 'src/app/common/flight';
import { Gate } from 'src/app/common/gate';
import { Status } from 'src/app/common/status';
import { AirlineService } from 'src/app/services/airline.service';
import { FlightInfoService } from 'src/app/services/flight-info.service';
import * as airportInfo from './../../../assets/airports.json';

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
  cities: any[] = [];
  uniqueCities: any[] = [];


  airportNameAndIATA: any[] = []; 

  airportInfoData: any = airportInfo;

  constructor(private formBuilder: FormBuilder, 
              private airlineService: AirlineService, 
              private flightInfoService: FlightInfoService) { }

  ngOnInit(): void {
    // Populate airlines, status, and gates
    // Populate airport country and city
    this.getAirlines();
    this.getStatus();
    this.getGates();
    this.getAirportCity();
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

  // Populate airport cities with sort by alphabetical order and unique
  getAirportCity(){
    for(let i = 0; i <= this.airportInfoData.length; i++){
      if(this.airportInfoData[i]['country'] == 'United States'){
        // console.log(this.airportInfoData[i].city)
        this.cities.push(this.airportInfoData[i].city);
        this.uniqueCities = [...new Set(this.cities)].sort();
      }
    }
  }

  // Populate airport name and IATA code based on airport city
  getAirportNameAndIataByCity(city: any){
    console.log(city)
    this.airportNameAndIATA = [];
    for(let i=0; i <= this.airportInfoData.length; i++){
      if(this.airportInfoData[i]['city'] == city && this.airportInfoData[i]['country'] == 'United States'){
        this.airportNameAndIATA.push(this.airportInfoData[i])
        console.log(this.airportNameAndIATA)
      }
    }

  }

}
