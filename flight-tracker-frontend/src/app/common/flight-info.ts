export class FlightInfo {

    constructor(public id: number,
        public airline: string,
        public flight: string,
        public status: string,
        public gate: string,
        public flightCode: string,
        public airportCode: string,
        public scheduledTime: string,
        public scheduledDate: string,
        public updateTime: string){}
}
