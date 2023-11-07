import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FlightInfo } from '../common/flight-info';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {

  private baseUrl = 'http://localhost:8080/api/flight_Infoes';

  constructor(private httpClient: HttpClient) { }

  getFlightStatusInfo(): Observable<FlightInfo[]>{
    return this.httpClient.get<GetResponseFlightInfo>(this.baseUrl).pipe(
      map(response => response._embedded.flight_Infoes)
    )
  }

  getFlightStatusInfoByFlightCode(flightCode: string): Observable<FlightInfo[]>{
    const flightCodeUrl = `${this.baseUrl}/search/findByFlightCodeContaining?flightCode=${flightCode}`;

    return this.httpClient.get<GetResponseFlightInfo>(flightCodeUrl).pipe(
      map(response => response._embedded.flight_Infoes)
    )
  }

}
interface GetResponseFlightInfo{
  _embedded: {
    flight_Infoes: FlightInfo[];
  }
}
