const { Pet } = require('../src/pet');

describe('constructor', () => {
    
    let pet = new Pet('Fido');
    console.log(pet.name);
    it('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    })

    it('pet has a name', () => {
        expect(pet.name).toEqual('Fido');
    }) 

    // it('checks name', () => {
    //     const pet = new Pet('Fido');
    //     expect(pet.name).toBe('Fido');
    // })
})