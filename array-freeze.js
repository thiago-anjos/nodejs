// this is a remember script to help you to learn how to use array freeze function in javascript.

const array = [1, 2, 3, 4, 5];
Object.freeze(array);

const arrayPets = ["dog", "cat", "fish"];

for (let i = 0; i < array.length; i++) {
  array[i] *= 2;
}

for (let i = 0; i < arrayPets.length; i++) {
  arrayPets[i] += " 2";
}

console.log("array", array);
console.log("arrayPets", arrayPets);
