// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)

function returnKeysArray(object) {
  return Object.keys(object);
}

const input = { name: "John", age: 30 };
console.log("result: ", returnKeysArray(input));
