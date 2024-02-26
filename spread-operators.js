const animals = ["cat", "dog", "fish"];

const newAnimals = [...animals, "bird", "turtle"];

console.log(newAnimals);

/* write a person object with name and age properties */
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();

const copyPerson = { ...person, name: "Jane" };

console.log(copyPerson);

copyPerson.greet();

/* rest operators to receive multiple arguments */

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5, "thiago"));
