// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// Union Types

let anotherCourse: string | number = "React - The Complete Guide";

anotherCourse = 12345;

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function inserAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray = inserAtBeginning([1, 2, 3], -1);

const stringArray = inserAtBeginning(["1", "2", "3"], "-1");
