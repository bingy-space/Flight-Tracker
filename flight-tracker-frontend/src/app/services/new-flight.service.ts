import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightInfo } from '../common/flight-info';

@Injectable({
  providedIn: 'root'
})
export class NewFlightService {

  private postUrl = 'http://localhost:8080/api/flight_Infoes';

  constructor(private httpClient: HttpClient) { }

  postNewFlight(flight: FlightInfo): Observable<any>{
    return this.httpClient.post<FlightInfo>(this.postUrl, flight);
  }
}
