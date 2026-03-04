// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)

function sumNumbers(init, ...values) {
  return values.reduce((start, current) => start + current, init);
}

console.log("result: ", sumNumbers(1, 2, 3, 4, 5));
