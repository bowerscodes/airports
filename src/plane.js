class Aeroplane {
    constructor(flightplan) {
        this.flightplan = flightplan
        this.currentAirport = flightplan.airports[0];
        this.previousAirport = null;

    };

    takeOff() {
        this.previousAirport = this.currentAirport;
        this.currentAirport = null;
        
    };

    land() {
        const flightplan = this.flightplan;
        const previousAirportIndex = flightplan.airports.indexOf(this.previousAirport);
        
        this.currentAirport = flightplan.airports[previousAirportIndex + 1];
    };
}

module.exports = Aeroplane;