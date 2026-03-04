// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)

function CheckIfDividableBy3And5(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "Divisible by both";
  } else {
    return "Not Divisible";
  }
}
const input = 15;
console.log("result: ", CheckIfDividableBy3And5(input));
