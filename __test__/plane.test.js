const Airport = require('../src/airport.js');
const Aeroplane = require('../src/plane.js');
const Flightplan = require('../src/flightplan.js');

describe('Aeroplane', () => {
    it('instantiates an object', () => {
        const sitges = new Airport('Sitges')
        const granCan = new Airport('Gran Canaria');

        const flightplan = new Flightplan([sitges, granCan]);
        const aeroplane = new Aeroplane(flightplan);
        
        expect(aeroplane).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const sitges = new Airport('Sitges')
        const granCan = new Airport('Gran Canaria');

        const flightplan = new Flightplan([sitges, granCan]);
        const aeroplane = new Aeroplane(flightplan);

        expect(aeroplane.currentAirport).toEqual(sitges);
    });
    it('can take off', () => {
        const sitges = new Airport('Sitges')
        const granCan = new Airport('Gran Canaria');

        const flightplan = new Flightplan([sitges, granCan]);
        const aeroplane = new Aeroplane(flightplan);

        aeroplane.takeOff();

        expect(aeroplane.currentAirport).toBeFalsy();
        expect(aeroplane.previousAirport).toEqual(flightplan.airports[0]);        
    });
    it('can land at a different airport', () => {
        const sitges = new Airport('Sitges');
        const granCan = new Airport('Gran Canaria');

        const flightplan = new Flightplan([sitges, granCan]);
        const aeroplane = new Aeroplane(flightplan);

        aeroplane.takeOff();
        aeroplane.land();

        expect(aeroplane.currentAirport).toEqual(granCan);
        expect(aeroplane.previousAirport).toEqual(sitges);
    });

});