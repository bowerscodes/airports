(function exportAeroplane() {
    
    class Aeroplane {
        constructor(flightplan) {
            this.flightplan = flightplan;
            this.currentAirport = flightplan.airports[0];
            this.previousAirport = null;
            this.currentAirport.addPlane(this);
        };
    
        takeOff() {

            this.previousAirport = this.currentAirport;
            this.currentAirport = null;
            this.previousAirport.removePlane(this);
            
        };
    
        land() {
            const flightplan = this.flightplan;
            const previousAirportIndex = flightplan.airports.indexOf(this.previousAirport);
            
            this.currentAirport = flightplan.airports[previousAirportIndex + 1];
            this.currentAirport.addPlane(this);
        };
    }

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Aeroplane;
} else {
    window.Aeroplane = Aeroplane;
}

}());



