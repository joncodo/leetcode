{
  let age: number = 30;
  let name: string = "John";
  let isStudent: boolean = true;

  interface Person {
    name: string;
    age: number;
    isStudent?: boolean;
  }

  const person: Person = {
    name: "John",
    age: 30,
  };

  function greet(person: Person) {
    return `Hello, ${person.name}`;
  }

  let value: string | number;
  value = "Hello";
  value = 10;

  interface Animal {
    name: string;
  }

  interface Bird {
    canFly: boolean;
  }

  type FlyingAnimal = Animal & Bird;

  function identity<T>(arg: T): T {
    return arg;
  }

  let numberId = identity<number>(10);
  let stringId = identity<string>("Hello");

  class Animal {
    constructor(public name: string) { }
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }

  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  let move: Direction = Direction.Up;

  let value2: any = "Hello World";
  let length: number = (value2 as string).length;

  // Distinct lists in sets when unique all values
  // No keys like a hashmap
  // More like an array
  // Maintains order of insertion
  // Use when arrays are meant to be unique
  const numSet = new Set([1, 2, 3]);
}
