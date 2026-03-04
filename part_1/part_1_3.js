// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}
