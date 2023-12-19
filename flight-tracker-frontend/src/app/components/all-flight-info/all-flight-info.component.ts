import { Component } from '@angular/core';
import { FlightInfo } from 'src/app/common/flight-info';
import { FlightInfoService } from 'src/app/services/flight-info.service';
import * as airportInfo from './../../../assets/airports.json';

@Component({
  selector: 'app-all-flight-info',
  templateUrl: './all-flight-info.component.html',
  styleUrls: ['./all-flight-info.component.css']
})
export class AllFlightInfoComponent {
  flightStatusInfo: FlightInfo[] = [];
  airportInfoData: any = airportInfo;
  scheduledDateList: any[] = [];

  constructor(private flightInfoService: FlightInfoService){}

  ngOnInit(): void{
    this.listFlightStatusInfo();
    // this.getAirportCityByCode();
    this.listFlightScheduledDate();
  }

  // List of flight status info
  listFlightStatusInfo(){
    this.flightInfoService.getFlightStatusInfo().subscribe(
      data => {
        this.flightStatusInfo = data;
        // console.log(this.flightStatusInfo)
        // Converting airport code to airport city name
        this.flightStatusInfo[0].airportCode = this.getAirportCityByCode(this.flightStatusInfo);
      }
    )
  }
  // Get list of flight status info by flight code
  // Param: flightCode
  getFlightStatusInfoByFlightCode(flightCode: string){
    this.flightInfoService.getFlightStatusInfoByFlightCode(flightCode).subscribe(
      data => {
        this.flightStatusInfo = data;
      }
    )
  }

  // Get airport city name by airport code from JSON
  // Param: airportCode
  getAirportCityByCode(airportCode: any){
    let airportCodeTemp = airportCode[0].airportCode;

    for(let i = 0; i <= this.airportInfoData.length; i++){
      if(this.airportInfoData[i]['iata_code'] == airportCodeTemp){
        return this.airportInfoData[i].city;
      }
    }
  }

  // List of flight scheduled date
  listFlightScheduledDate(){

    this.flightInfoService.getFlightStatusInfo().subscribe(
      data => {
        data.forEach(e => this.scheduledDateList.push(e.scheduledDate))
        this.scheduledDateList = [...new Set(this.scheduledDateList)];
        // console.log(this.scheduledDateList)
      }
    )
  }
}
