const Flightplan = require('../src/flightplan.js');

describe('Flight Plan', () => {
    it('can be instantiated', () => {
        expect(new Flightplan()).toBeInstanceOf(Object);
    });
    it('contains airports', () => {
        const sitges = jest.fn();
        const granCan = jest.fn();

        const flightplan = new Flightplan([sitges, granCan]);

        expect(flightplan.airports).toEqual([sitges, granCan]);
    });
})