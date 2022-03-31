(function exportAirport() {

    class Airport {
        constructor(name) {
            this.name = name;
            this.aeroplanes = []
        }
    
        addPlane(aeroplane) {
            this.aeroplanes.push(aeroplane);
        }
    
        removePlane(aeroplane) {
            this.aeroplanes.splice(this.aeroplanes.indexOf(aeroplane), 1);
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Airport;
    } else {
        window.Airport = Airport;
    }

}());