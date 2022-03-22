const Ship = require('../src/ship.js')

describe('Ship', () => {
    it('instantiates an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Sitges');

        expect(ship.port).toEqual('Sitges');
    });

})