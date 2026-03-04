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
const input = [1, 3, 7, 2, 4];
console.log("result: ", findLargestNumber(input));

// another solution using sort function
// function findLargestNumber(arr) {
//   arr.sort();
//   return arr[arr.length - 1];
// }
