const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    it('checks that a new pet is created, with the name of Fido', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    })
})