function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age ++;
    hungerIncrease = 5;
    fitnessDecrease = 3;
    this.hunger += hungerIncrease;
    this.fitness -= fitnessDecrease;
}

Pet.prototype.walk = function() {
    fitnessIncrease = 4;
    maxFitness = 10;
    this.fitness + fitnessIncrease > maxFitness ? this.fitness = maxFitness : this.fitness += fitnessIncrease;
}

module.exports = {
    Pet
};