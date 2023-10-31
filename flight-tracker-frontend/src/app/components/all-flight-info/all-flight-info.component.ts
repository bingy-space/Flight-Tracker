import { Component } from '@angular/core';
import { FlightInfo } from 'src/app/common/flight-info';
import { FlightInfoService } from 'src/app/services/flight-info.service';

@Component({
  selector: 'app-all-flight-info',
  templateUrl: './all-flight-info.component.html',
  styleUrls: ['./all-flight-info.component.css']
})
export class AllFlightInfoComponent {
  flightStatusInfo: FlightInfo[] = [];

  constructor(private flightInfoService: FlightInfoService){}

  ngOnInit(): void{
    this.listFlightStatusInfo();
  }

  // List of flight status info
  listFlightStatusInfo(){
    this.flightInfoService.getFlightStatusInfo().subscribe(
      data => {
        this.flightStatusInfo = data;
        console.log(data)
      }
    )
  }


}
