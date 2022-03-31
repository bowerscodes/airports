
(function exportFlightplan() {

    class Flightplan {
        constructor(airports) {
            this.airports = airports;
        };
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = Flightplan;
    } else {
        window.Flightplan = Flightplan;
    }

}());