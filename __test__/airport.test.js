const Airport = require('../src/airport.js');
const Aeroplane = require('../src/plane.js');
const Flightplan = require('../src/flightplan.js');

describe('airport', () => {
    describe('with airports and airplanes', () => {
        let airport;
        
        beforeEach(() => {
            airport = new Airport('Sitges');
            flightplan = {
                airports: [airport]
            };
            ba149 = new Aeroplane(flightplan);
            ba127 = new Aeroplane(flightplan);
    });

    it('can be instantiated', () => {
        expect(new Airport()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        expect(airport.airport).toEqual('Sitges');
    });
    it('can add planes', () => {
        airport.addPlane(ba149);
        expect(airport.aeroplanes).toContain(ba149);
        expect(ba149.currentAirport).toBe(airport);
    });
    it('can remove planes', () => {
        airport.addPlane(ba127);
        airport.addPlane(ba149);
        airport.removePlane(ba149);

        expect(airport.aeroplanes).toContain(ba127);
        expect(ba127.currentAirport).toBe(airport);
        expect(ba149.currentAirport).toBeFalsy;
    });


});
    
    
    
});