class Aeroplane {
    constructor(startingAirport) {
        this.airport = startingAirport;
        this.previousAirport = null;

    };

    takeOff() {
        this.airport = null;
    };

    land(airport) {
        this.airport = airport;
    };
}

module.exports = Aeroplane;