const Aeroplane = require('../src/plane.js');

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
            expect(sitges.addPlane).toHaveBeenCalledWith(aeroplane);
        });
        it('can take off', () => {    
            aeroplane.takeOff();
    
            expect(aeroplane.currentAirport).toBeFalsy();
            expect(sitges.removePlane).toHaveBeenCalledWith(aeroplane);
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