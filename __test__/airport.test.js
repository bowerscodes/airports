const Airport = require('../src/airport.js');

describe('airport', () => {
    it('can be instantiated', () => {
        expect(new Airport()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        const airport = new Airport('Sitges');

        expect(airport.airportName).toEqual('Sitges');
    })
})