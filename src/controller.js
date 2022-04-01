(function exportController() {

    class Controller {
    
        constructor(aeroplane) {
            this.aeroplane = aeroplane;

            // this.renderAirports();
        }
    
        renderAirports (airports) {
            const airportsElement = document.querySelector('#airports');
            airportsElement.style.width = '0px';

            airports.forEach((airport, index) => {
                const newAirportElement = document.createElement('div');
                const newAirportImg = document.createElement('img');

                newAirportElement.className = 'airport';
                newAirportElement.dataset.airportName = airport.name;
                newAirportElement.dataset.airportIndex = index;

                newAirportImg.className = 'airport, airportImg';
                newAirportImg.dataset.airportName = airport.name;
                newAirportImg.dataset.airportIndex = index;
                newAirportImg.src = "images/runway.jpeg";

                airportsElement.appendChild(newAirportElement);
                newAirportElement.appendChild(newAirportImg);

                const airportsElementWidth = parseInt(airportsElement.style.width, 10);
                airportsElement.style.width = `${airportsElementWidth + 386}px`;
            })
        };

        renderPlane (aeroplane) {
            // const aeroplane = this.aeroplane;

            const planeAirportIndex = aeroplane.flightplan.airports.indexOf(aeroplane.currentAirport);
            const airportElement = document.querySelector(`[data-airport-index='${planeAirportIndex}']`);
            const planeElement = document.querySelector('#plane');

            console.log(airportElement.offsetTop);
            console.log(airportElement.offsetLeft);
            planeElement.style.top = `${airportElement.offsetTop + 32}px`;
            planeElement.style.left = `${airportElement.offsetLeft + 48}px`;
        }
    
    }

if (typeof module !=='undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}

}());

