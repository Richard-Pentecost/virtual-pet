const { Pet } = require('../src/pet');

describe('constructor', () => {
    
    let pet = new Pet('Fido');

    it('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
    }); 
});

describe('growUp', () => {
    let pet = new Pet('Monty');

    it('has an initial age of 0', () => {
        expect(pet.age).toBe(0);
    });

    it('the pets age can be increased by 1', () => {
        pet.growUp();
        expect(pet.age).toBe(1);
    });
});

describe('getting older, getting unhealthier', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
    });

    it('has an initial hunger of 0', () => {
        expect(pet.hunger).toBe(0);
    });

    it('when the age increments by 1, the hunger increments by 5', () => {
        pet.growUp();
        expect(pet.hunger).toBe(5);
    });

    it('has an initial fitness level of 10', () => {
        expect(pet.fitness).toBe(10);
    });

    it('when the age increments by 1, the fitness decreases by 3', () => {
        pet.growUp();
        expect(pet.fitness).toBe(7);
    });
});

describe('Keeping fit', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
        pet.growUp();
        pet.growUp();
    });

    it('increases the fitness by 4, when called', () => {
        const fitness = pet.fitness;
        pet.walk();
        expect(pet.fitness).toBe(fitness + 4);
    });

    it('can\'t increase the fitness level above 10', () => {
        pet.walk();
        pet.walk();
        expect(pet.fitness).toBe(10); 
    });
});

describe('Keeping Fed', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
        pet.growUp();
    });

    it('decreases the hunger level by 3', () => {
        const hunger = pet.hunger;
        pet.feed();
        expect(pet.hunger).toBe(hunger - 3);
    });

    it('hunger can\'t go below 0', () => {
        pet.feed();
        pet.feed();
        expect(pet.hunger).toBe(0);
    });
});

describe('Check Up', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
    })
    it('returns comment asking for a walk, when fitness is 3 or less', () => {
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.feed();
        pet.feed();
        pet.feed();
        pet.feed();
        expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('returns comment about pets hunger if it is greater than or equal to 5', () => {
        pet.growUp();
        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns a comment if the fitness is 3 or less and hunger is 5 or more', () => {
        pet.growUp();
        pet.growUp();
        pet.growUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns a comment if the fitness is more than 3 and hunger is less than 5', () => {
        expect(pet.checkUp()).toBe('I feel great!');
    });
})