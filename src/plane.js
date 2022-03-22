class Aeroplane {
    constructor(startingAirport) {
        this.airport = startingAirport;
        this.previousAirport = null;

    };

    takeOff() {
        this.airport = null;
    };

    land() {

    };
}

module.exports = Aeroplane;