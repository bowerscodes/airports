const Airport = require('../src/airport.js');
const Aeroplane = require('../src/plane.js');
const Flightplan = require('../src/flightplan.js');

describe('airport', () => {
    it('can be instantiated', () => {
        expect(new Airport()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        const airport = new Airport('Sitges');

        expect(airport.airport).toEqual('Sitges');
    });
    it('can add planes', () => {
        const airport = new Airport('Sitges');
        const flightplan = new Flightplan([airport]);
        const ba149 = new Aeroplane(flightplan);
        
        airport.addPlane(ba149);
        expect(airport.aeroplanes).toContain(ba149);
        expect(ba149.currentAirport).toBe(airport);
    });
    it('can remove planes', () => {
        const airport = new Airport('Sitges');
        const flightplan = new Flightplan([airport])
        const ba149 = new Aeroplane(flightplan);
        const ba127 = new Aeroplane(flightplan);

        airport.addPlane(ba127);
        airport.addPlane(ba149);
        airport.removePlane(ba149);

        expect(airport.aeroplanes).toContain(ba127);
        expect(ba127.currentAirport).toBe(airport);
        expect(ba149.currentAirport).toBeFalsy;
    })
})