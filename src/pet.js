const MAX_FITNESS = 10;
const FITNESS_INCREASE = 4;
const FITNESS_DECREASE = 3;
const FITNESS_THRESHOLD = 3;

const MAX_HUNGER = 10;
const HUNGER_INCREASE = 5;
const HUNGER_DECREASE = 3;
const HUNGER_THRESHOLD = 5;

const MAX_AGE = 30;

const ERROR_MESSAGE = 'You\'re pet is no longer alive :(';

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = MAX_FITNESS;
        this.children = [];        
    }

    get isAlive() {
        return this.hunger < MAX_HUNGER && this.fitness > 0 && this.age < MAX_AGE;
    }

    growUp() {
        if (!this.isAlive) {
            throw new Error(ERROR_MESSAGE);
        }
    this.age ++;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
    }
    
    walk() {
        if (!this.isAlive) { 
            throw new Error(ERROR_MESSAGE); 
        }
        this.fitness + FITNESS_INCREASE > MAX_FITNESS ? this.fitness = MAX_FITNESS : this.fitness += FITNESS_INCREASE;
    }
    
    feed() {
        if (!this.isAlive) {
            throw new Error(ERROR_MESSAGE);
        }
        this.hunger - HUNGER_DECREASE > 0 ? this.hunger -= HUNGER_DECREASE : this.hunger = 0;
    }
    
    checkUp() {
        if (!this.isAlive) {
            throw new Error(ERROR_MESSAGE);
        }
        const fitness = this.fitness;
        const hunger = this.hunger;
        if (fitness <= FITNESS_THRESHOLD && hunger >= HUNGER_THRESHOLD) {
            return 'I am hungry AND I need a walk';
        } else if (fitness <= FITNESS_THRESHOLD) {
            return 'I need a walk';
        } else if (hunger >= HUNGER_THRESHOLD) {
            return 'I am hungry';
        } 
        return 'I feel great!';
    }

    adoptChild(child) {
        if (!this.isAlive) {
            throw new Error(ERROR_MESSAGE);
        }
        this.children.push(child);
    }
    
    haveBaby(name) {
        if (!this.isAlive) { 
            throw new Error(ERROR_MESSAGE);
        }
        this.children.push(new Pet(name));
    }
}



module.exports = Pet;