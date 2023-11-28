import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airline } from 'src/app/common/airline';
import { Flight } from 'src/app/common/flight';
import { Gate } from 'src/app/common/gate';
import { Status } from 'src/app/common/status';
import { AirlineService } from 'src/app/services/airline.service';
import { FlightInfoService } from 'src/app/services/flight-info.service';
import * as airportInfo from './../../../assets/airports.json';
import { NewFlightService } from 'src/app/services/new-flight.service';

@Component({
  selector: 'app-new-flight-info',
  templateUrl: './new-flight-info.component.html',
  styleUrls: ['./new-flight-info.component.css']
})
export class NewFlightInfoComponent {

  airlines: Airline[] = [];
  flights: Flight[] = [];
  statusList: Status[] = [];
  gates: Gate[] = [];
  cities: any[] = [];
  uniqueCities: any[] = [];

  formGroup: FormGroup;
  airportNameAndIATA: any[] = []; 

  airportInfoData: any = airportInfo;

  constructor(private formBuilder: FormBuilder, 
              private airlineService: AirlineService, 
              private flightInfoService: FlightInfoService,
              private newFlightService: NewFlightService) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      airline: [''],
      flight: [''],
      status: [''],
      gate: [''],
      flightCode: [''],
      airportCode: [''],
      scheduledTime: [''],
      updateTime: ['']
    })

    // Populate airlines, status, and gates
    // Populate airport country and city
    this.getAirlines();
    this.getAllStatus();
    this.getGates();
    this.getAirportCity();
  }

  get airline(){return this.formGroup.get('airline')};
  get flight(){return this.formGroup.get('flight')};
  get status(){return this.formGroup.get('status')};
  get gate(){return this.formGroup.get('gate')};
  get flightCode(){return this.formGroup.get('flightCode')};
  get airportCode(){return this.formGroup.get('airportCode')};
  get scheduledTime(){return this.formGroup.get('scheduledTime')};
  get updateTime(){return this.formGroup.get('updateTime')};


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
  getAllStatus() {
    this.flightInfoService.getAllStatus().subscribe(
      data => {
        this.statusList = data;
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

  onSubmit(){
    console.log("New Flight POST")
    console.log(this.formGroup.value);

    this.newFlightService.postNewFlight(this.formGroup.value).subscribe({
      next: response => {
        alert(`New Flight POST`)
      },
      error: err => {
        alert(`There was an error: ${err.message}`);
      }
    })
  }

}
