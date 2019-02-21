const { Pet } = require('../src/pet');

describe('constructor', () => {
    
    let pet = new Pet('Fido');

    it('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    })

    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
    }) 
})

describe('growUp', () => {
    let pet = new Pet('Monty');

    it('has an initial age of 0', () => {
        expect(pet.age).toBe(0);
    })

    it('the pets age can be increased by 1', () => {
        pet.growUp();
        expect(pet.age).toBe(1);
    })
})

describe('getting older, getting unhealthier', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
    })

    it('has an initial hunger of 0', () => {
        expect(pet.hunger).toBe(0);
    })

    it('when the age increments by 1, the hunger increments by 5', () => {
        pet.growUp();
        expect(pet.hunger).toBe(5);
    })

    it('has an initial fitness level of 10', () => {
        expect(pet.fitness).toBe(10);
    })

    it('when the increments by 1, the fitness decreases by 3', () => {
        pet.growUp();
        expect(pet.fitness).toBe(7);
    })
})