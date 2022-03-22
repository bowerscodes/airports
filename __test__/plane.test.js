const Airport = require('../src/airport.js');
const Aeroplane = require('../src/plane.js');

describe('Aeroplane', () => {
    it('instantiates an object', () => {
        expect(new Aeroplane()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const airport = new Airport('Sitges');
        const aeroplane = new Aeroplane(airport);

        expect(aeroplane.airport).toEqual(airport);
    });
    it('can take off', () => {
        const airport = new Airport('Sitges');
        const aeroplane = new Aeroplane(airport);

        aeroplane.takeOff();

        expect(aeroplane.airport).toBeFalsy();        
    });
    it('can dock', () => {
        const sitges = new Airport('Sitges');
        const granCan = new Airport('Gran Canaria');
        const aeroplane = new Aeroplane(sitges)

        aeroplane.takeOff();
        aeroplane.land(granCan);

        expect(aeroplane.airport).toEqual(granCan)
    });

});