const Flightplan = require('../src/flightplan.js');
const Airport = require('../src/airport.js');

describe('Flight Plan', () => {
    it('can be instantiated', () => {
        expect(new Flightplan()).toBeInstanceOf(Object);
    });
    it('contains airports', () => {
        const sitges = new Airport('Sitges');
        const granCan = new Airport('Gran Canaria');

        const flightplan = new Flightplan([sitges, granCan]);

        expect(flightplan.airports).toEqual([sitges, granCan]);
    });
})