const Airport = require('../src/airport.js');

describe('airport', () => {
    describe('with airports and airplanes', () => {
        let airport;
        
        beforeEach(() => {
            airport = new Airport('Sitges');
            flightplan = {
                airports: [airport]
            };
            ba149 = jest.fn();
            ba127 = jest.fn();
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
    });
    it('can remove planes', () => {
        airport.addPlane(ba127);
        airport.addPlane(ba149);
        airport.removePlane(ba149);

        expect(airport.aeroplanes).toContain(ba127);

    });
    });    
});