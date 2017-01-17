function hello(name: string) {
    console.log('Hello ' + name);
}
hello('aaaa');

let test: number = 1;
// number = "xxx";

// Array
let array1: any[] = ['a', 'b', 2];

// Tuples
// let hobbies : [string, number] = [1, 'aa'];
let hobbies : [string, number] = ['aa', 1];

// Enum
enum Color {
    Gray,
    Green,
    Yellow
}
let myColor = Color.Gray;
console.log(myColor);

// Any
let car: any = 'BMW';
car = {
    brand: 'BMW'
};
console.log(car);

// Functions
let ret1 = 'a';
function testA (arg1: string): string {
    return ret1 + arg1;
}
testA('a');

function testB () : void {
    console.log(ret1);
}

// Function Types
let ft: (a:string) => string;
ft = testA;

// Object
let user: {name: string, age: number} = {
    name: 'A',
    age: 1
};
let complex: {
    data: number[],
    output: (all: boolean) => number[]
} = {
    data: [1,2,3],
    output: (all): number[] => {
    // output: function (all): number[] {
        return this.data;
    }
};

type Complex = {
    data: number[],
    output: (all: boolean) => number[]
};
let complex2 : Complex = {
    data: [1,2,3],
    output: function (all): number[] {
        return this.data;
    }
};

// Union
let age: string | number = 1;
// age = true;
age = '2';

// Check types
let finalValue = 20;
if (typeof finalValue == 'number') {
    console.log('finalValue is number');
}

// Never
function a(): never {
    // funciton "never" finish.. so NEVER type
    throw new Error();
}

// Nullable
let b: number | null = null;

// Default
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countdown();

// Rest
function makeArray(...args: number[]): number[] {
    return args;
}
console.log(makeArray(1, 2, 3));

// Destructuring

let {name: myName, age: myAge} = {
    name: 'aaa',
    age: 22
};
console.log(myName, myAge);


