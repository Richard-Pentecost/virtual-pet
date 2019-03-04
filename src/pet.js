const MAX_FITNESS = 10;
const HUNGER_INCREASE = 5;
const FITNESS_DECREASE = 3;
const FITNESS_INCREASE = 4;
const HUNGER_DECREASE = 3;
const FITNESS_THRESHOLD = 3;
const HUNGER_THRESHOLD = 5;
const ERROR_MESSAGE = 'You\'re pet is no longer alive :(';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.hunger < 10 && this.fitness > 0 && this.age < 30;
    }
}

Pet.prototype.growUp = function() {
    if (this.isAlive === false) { return ERROR_MESSAGE };
    this.age ++;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
}

Pet.prototype.walk = function() {
    if (this.isAlive === false) { return ERROR_MESSAGE };
    this.fitness + FITNESS_INCREASE > MAX_FITNESS ? this.fitness = MAX_FITNESS : this.fitness += FITNESS_INCREASE;
}

Pet.prototype.feed = function() {
    if (this.isAlive === false) { return ERROR_MESSAGE };
    this.hunger - HUNGER_DECREASE > 0 ? this.hunger -= HUNGER_DECREASE : this.hunger = 0;
}

Pet.prototype.checkUp = function() {
    if (this.isAlive === false) { return ERROR_MESSAGE };
    const fitness = this.fitness;
    const hunger = this.hunger;
    if (fitness <= FITNESS_THRESHOLD && hunger >= HUNGER_THRESHOLD) {
        return 'I am hungry AND I need a walk';
    } else if (fitness <= FITNESS_THRESHOLD) {
        return 'I need a walk';
    } else if (hunger >= HUNGER_THRESHOLD) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
}

module.exports = {
    Pet
};