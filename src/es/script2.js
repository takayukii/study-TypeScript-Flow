// @flow

class Person {
  name: string;
  username: string;
  // private type: string
  // protected age: number
  age: number;

  // constructor(name: string, public username: string) {
  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
    this.age = 27;
  }

  printAge() {
    console.log(this.age);
  }
}

let person = new Person('Max', 'max');
console.log(person);
person.printAge();

class Max extends Person {
  // name = 'Max';
  constructor(username: string) {
    super('Max', username);
  }
}
let max = new Max('bb');
console.log(max);

class Plant {
  _species: string;

  constructor() {
    this._species = 'Default';
  }

  // Potentially unsafe get/set usage.
  // https://github.com/facebook/flow/issues/2826
  get species(): string {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AxxxxB';
console.log(plant.species);

// Static

class Helpers {
  // static PI: number = 3.14;
  static get PI(): number {
    return 3.14;
  }
  static calcCircumference(diameter: number) : number {
    return this.PI * diameter;
  }
}
console.log(Helpers.PI * 2);
console.log(Helpers.calcCircumference(8));

