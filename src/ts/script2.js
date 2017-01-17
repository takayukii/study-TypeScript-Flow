var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        this.age = 27;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person('Max', 'max');
console.log(person);
person.printAge();
var Max = (function (_super) {
    __extends(Max, _super);
    // name = 'Max';
    function Max(username) {
        _super.call(this, 'Max', username);
    }
    return Max;
}(Person));
var max = new Max('bb');
console.log(max);
var Plant = (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AxxxxB';
console.log(plant.species);
// Static
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI * 2);
console.log(Helpers.calcCircumference(8));
// Abstract
