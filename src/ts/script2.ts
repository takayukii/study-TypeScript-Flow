class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
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
    private _species: string = 'Default';

    get species() {
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
    static PI: number = 3.14;
    static calcCircumference(diameter: number) : number {
        return this.PI * diameter;
    }
}
console.log(Helpers.PI * 2);
console.log(Helpers.calcCircumference(8));

// Abstract

