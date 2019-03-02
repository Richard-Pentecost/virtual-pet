function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    hungerIncrease = 5;
    fitnessDecrease = 3;
    this.age ++;
    this.hunger += hungerIncrease;
    this.fitness -= fitnessDecrease;
}

Pet.prototype.walk = function() {
    fitnessIncrease = 4;
    maxFitness = 10;
    this.fitness + fitnessIncrease > maxFitness ? this.fitness = maxFitness : this.fitness += fitnessIncrease;
}

Pet.prototype.feed = function() {
    hungerDecrease = 3;
    this.hunger - hungerDecrease > 0 ? this.hunger -= hungerDecrease : this.hunger = 0;
}

Pet.prototype.checkUp = function() {
    const fitnessThreshold = 3;
    const hungerThreshold = 5;
    const fitness = this.fitness;
    const hunger = this.hunger;
    if (fitness <= fitnessThreshold && hunger >= hungerThreshold) {
        return 'I am hungry AND I need a walk';
    }else if(fitness <= fitnessThreshold) {
        return 'I need a walk';
    } else if (hunger >= hungerThreshold) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
}

module.exports = {
    Pet
};