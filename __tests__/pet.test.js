const { Pet } = require('../src/pet');

describe('constructor', () => {
    
    let pet = new Pet('Fido');

    it('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    })

    it('pet has a name', () => {
        expect(pet.name).toEqual('Fido');
    }) 
})

describe('growUp', () => {
    let pet = new Pet('Monty');

    it('has an initial age of 1', () => {
        expect(pet.age).toBe(0);
    })

    it('the pets age can be increased', () => {
        pet.growUp();
        expect(pet.age).toBe(1);
    })
})