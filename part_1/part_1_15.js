// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)

function splitStringToArray(str) {
  return str.split(" ");
}

const input = "The quick brown fox";
console.log("result: ", splitStringToArray(input));
