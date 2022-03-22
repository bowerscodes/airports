const Aeroplane = require('../src/plane.js')

describe('Aeroplane', () => {
    it('instantiates an object', () => {
        expect(new Aeroplane()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const aeroplane = new Aeroplane('Sitges');

        expect(aeroplane.airport).toEqual('Sitges');
    });
    it('can take off', () => {
        const aeroplane = new Aeroplane('Sitges');

        aeroplane.takeOff();

        expect(aeroplane.airport).toBeFalsy();        
    })

});