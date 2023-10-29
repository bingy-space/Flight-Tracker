import { Component } from '@angular/core';
import { Airline } from 'src/app/common/airline';
import { Flight } from 'src/app/common/flight';
import { AirlineService } from 'src/app/services/airline.service';
import * as airlineInfo from './../../../assets/airlines.json';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent {

  airlines: Airline[] = [];
  flights: Flight[] = [];
  currentAirline: any;
  airlineInfoData: any = airlineInfo;
  airlineUrl: any;

  constructor(private airlineService: AirlineService){}

  ngOnInit(): void{
    this.listAirlines();
  }

  // List of airlines
  listAirlines(){
    this.airlineService.getAirlineList().subscribe(
      data => {
        this.airlines = data;
        console.log(data);
      }
    )
  }
  // Get flight by airline code
  // Param: airlineCode, airlineName
  getFlightByAirlineCode(airlineCode: any, airlineName: any){
    console.log(airlineCode)
    this.currentAirline = airlineName;
    this.airlineService.getFlightsByAirlineCode(airlineCode).subscribe(
      data =>{
        this.flights = data;
        console.log(data)
      }
    )
  }
  // Get airline image url by airline code from JSON
  // Param: airlineCode
  getAirlineImageUrlByCode(airlineCode: any){
    console.log(airlineCode)
    for(let i = 0; i <= this.airlineInfoData.length; i++){
      if(this.airlineInfoData[i].id == airlineCode){
        this.airlineUrl = this.airlineInfoData[i].logo;
        console.log('Find it')
        console.log(this.airlineUrl)
      }
    }
    console.log(this.airlineUrl);
  }
}
