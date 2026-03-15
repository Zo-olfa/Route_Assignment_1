// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
const str = "123";
const result_1 = Number(str) + 7;
console.log("result_1: ", result_1);

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
const value = 0;
if (value) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
const arr_4 = [1, 2, 3, 4, 5];
const result_4 = arr_4.filter((num) => num % 2 == 0);
console.log("result_4: ", result_4);

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArr = [...arr1, ...arr2];
console.log("result_5: ", mergeArr);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
const day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not Available");
}

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
const arr_7 = ["a", "ab", "abc"];
const result_7 = arr_7.map((item) => item.length);
console.log("result_7: ", result_7);

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
function CheckIfDividableBy3And5(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "Divisible by both";
  } else {
    return "Not Divisible";
  }
}
const input_7 = 15;
console.log("result_8: ", CheckIfDividableBy3And5(input_7));

// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
const input_9 = 5;
const squareOfNumber = (number) => number ** 2;
console.log("result_9: ", squareOfNumber(input_9));

// 10. Write a function that destructure an object to extract values and returns a formatted string. (0.5 Grade)
function extractPersonValues(person) {
  return `${person.name} is ${person.age} year${person.age !== 1 ? "s" : ""} old`;
}

const person = { name: "John", age: 25 };
console.log("result_10: ", extractPersonValues(person));

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
function sumNumbers(init, ...values) {
  return values.reduce((start, current) => start + current, init);
}

console.log("result_11: ", sumNumbers(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
async function saySuccessAfter3Sec() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

saySuccessAfter3Sec().then((message) => {
  console.log("Resolves after 3 seconds with a ", message);
});

// 13. Write a function to find the largest number in an array. (0.5 Grade)
function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
const input_13 = [1, 3, 7, 2, 4];
console.log("result_13: ", findLargestNumber(input_13));

// another solution using sort function
// function findLargestNumber(arr) {
//   arr.sort();
//   return arr[arr.length - 1];
// }

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
function returnKeysArray(object) {
  return Object.keys(object);
}

const input_14 = { name: "John", age: 30 };
console.log("result_14: ", returnKeysArray(input_14));

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)

function splitStringToArray(str) {
  return str.split(" ");
}

const input_15 = "The quick brown fox";
console.log("result_15: ", splitStringToArray(input_15));
