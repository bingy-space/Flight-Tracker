import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Airline } from '../common/airline';
import { Flight } from '../common/flight';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private airlineUrl = 'http://localhost:8080/api/airlines';
  private flightUrl = 'http://localhost:8080/api/flights';

  constructor(private httpClient: HttpClient) { }

  getAirlineList(): Observable<Airline[]>{
    return this.httpClient.get<GetResponseAirlines>(this.airlineUrl).pipe(
      map(response => response._embedded.airlines)
    )
  }

  getFlightsByAirlineCode(theAirlineCode: string): Observable<Flight[]>{
    // Search URL
    const searchFlightUrl = `${this.flightUrl}/search/findByAirlineCode?code=${theAirlineCode}`;

    return this.httpClient.get<GetResponseFlights>(searchFlightUrl).pipe(
      map(response => response._embedded.flights)
    )
  }
}

interface GetResponseAirlines{
  _embedded: {
    airlines: Airline[];
  }
}
interface GetResponseFlights{
  _embedded: {
    flights: Flight[];
  }
}