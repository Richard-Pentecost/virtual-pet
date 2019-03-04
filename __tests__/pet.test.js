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
    });

    it('increases the fitness by 4', () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toBe(8);
    });

    it('can\'t increase the fitness level above 10', () => {
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toBe(10); 
    });
});

describe('Keeping Fed', () => {
    let pet;

    beforeEach(() => {
        pet = new Pet('Monty');
    });

    it('decreases the hunger level by 3', () => {
        pet.hunger = 6
        pet.feed();
        expect(pet.hunger).toBe(3);
    });

    it('hunger can\'t go below 0', () => {
        pet.hunger = 1;
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
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
        pet.fitness = 2;
        expect(pet.checkUp()).toBe('I need a walk');
        pet.fitness = 0;
        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('returns comment about pets hunger if it is greater than or equal to 5', () => {
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 7;
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 10;
        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns a comment if the fitness is 3 or less and hunger is 5 or more', () => {
        pet.fitness = 1;
        pet.hunger = 8;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns a comment if the fitness is more than 3 and hunger is less than 5', () => {
        expect(pet.checkUp()).toBe('I feel great!');
    });
})