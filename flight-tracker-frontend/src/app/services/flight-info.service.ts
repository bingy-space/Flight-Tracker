import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FlightInfo } from '../common/flight-info';
import { Status } from '../common/status';
import { Gate } from '../common/gate';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {

  private baseUrl = 'http://localhost:8080/api/flight_Infoes';
  private statusUrl = 'http://localhost:8080/api/status';
  private gateUrl = 'http://localhost:8080/api/gates';

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

  getAllStatus(): Observable<Status[]>{
    return this.httpClient.get<GetResponseStatus>(this.statusUrl).pipe(
      map(response => response._embedded.status)
    )
  }

  getGate(): Observable<Gate[]>{
    return this.httpClient.get<GetResponseGates>(this.gateUrl).pipe(
      map(response => response._embedded.gates)
    )
  }

}
interface GetResponseFlightInfo{
  _embedded: {
    flight_Infoes: FlightInfo[];
  }
}
interface GetResponseStatus{
  _embedded: {
    status: Status[];
  }
}
interface GetResponseGates{
  _embedded: {
    gates: Gate[];
  }
}
