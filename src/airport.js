class Airport {
    constructor(airport) {
        this.airport = airport
        this.aeroplanes = []
    };

    addPlane(aeroplane) {
        this.aeroplanes.push(aeroplane);
    }

    removePlane(aeroplane) {
        this.aeroplanes.splice(this.aeroplanes.indexOf(aeroplane), 1);
    }
}

module.exports = Airport;