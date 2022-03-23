const Airport = require('../src/airport.js');
const Aeroplane = require('../src/plane.js');
const Flightplan = require('../src/flightplan.js');

describe('Aeroplane', () => {
    describe('with airports and a flightplan', () => {
        let sitges;
        let granCan;

        beforeEach(() => {
            sitges = {
                addPlane: jest.fn(),
                removePlane: jest.fn(),
                name: 'Sitges',
                planes: []
            };
            granCan = {
                addPlane: jest.fn(),
                removePlane: jest.fn(),
                name: 'Gran Canaria',
                planes: []
            };
            flightplan = {
                airports: [sitges, granCan]
            };
            aeroplane = new Aeroplane(flightplan);
        });

        it('instantiates an object', () => {                  
            expect(aeroplane).toBeInstanceOf(Object);
        });
        it('has a starting port', () => { 
            expect(aeroplane.currentAirport).toEqual(sitges);
        });
        it('can take off', () => {    
            aeroplane.takeOff();
    
            expect(aeroplane.currentAirport).toBeFalsy();
            expect(aeroplane.previousAirport).toEqual(flightplan.airports[0]);
            expect(aeroplane.previousAirport.planes).toStrictEqual([]);       
        });
        it('can land at a different airport', () => {    
            aeroplane.takeOff();
            aeroplane.land();
    
            expect(aeroplane.currentAirport).toEqual(granCan);
            expect(aeroplane.previousAirport).toEqual(sitges);
        });
    
    });
    
});