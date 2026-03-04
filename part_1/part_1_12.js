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
