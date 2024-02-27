const person = {
  name: "John",
  age: 30,
};

const printName = (person) => {
  console.log(person.name);
};

printName(person);

// the destructure way

const printDestrucure = ({ name }) => {
  console.log(name);
};

printDestrucure(person);

//another way

const { name, age } = person;

// desestructure array
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);
