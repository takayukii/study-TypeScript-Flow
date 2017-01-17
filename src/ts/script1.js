var _this = this;
function hello(name) {
    console.log('Hello ' + name);
}
hello('aaaa');
var test = 1;
// number = "xxx";
// Array
var array1 = ['a', 'b', 2];
// Tuples
// let hobbies : [string, number] = [1, 'aa'];
var hobbies = ['aa', 1];
// Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Gray;
console.log(myColor);
// Any
var car = 'BMW';
car = {
    brand: 'BMW'
};
console.log(car);
// Functions
var ret1 = 'a';
function testA(arg1) {
    return ret1 + arg1;
}
testA('a');
function testB() {
    console.log(ret1);
}
// Function Types
var ft;
ft = testA;
// Object
var user = {
    name: 'A',
    age: 1
};
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        // output: function (all): number[] {
        return _this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// Union
var age = 1;
// age = true;
age = '2';
// Check types
var finalValue = 20;
if (typeof finalValue == 'number') {
    console.log('finalValue is number');
}
// Never
function a() {
    // funciton "never" finish.. so NEVER type
    throw new Error();
}
// Nullable
var b = null = null;
// Default
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countdown();
// Rest
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
// Destructuring
var _a = {
    name: 'aaa',
    age: 22
}, myName = _a.name, myAge = _a.age;
console.log(myName, myAge);
