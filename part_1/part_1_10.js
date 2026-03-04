// 10. Write a function that destructure an object to extract values and returns a formatted string. (0.5 Grade)

function extractPersonValues(person) {
  return `${person.name} is ${person.age} year${person.age !== 1 ? "s" : ""} old`;
}

const person = { name: "John", age: 25 };
console.log("result: ", extractPersonValues(person));
