const checkStatus = true;
console.log("Task 1");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (checkStatus) {
      resolve();
    } else {
      reject("Failed");
    }
  }, 3000);
});

promise
  .then(() => {
    console.log("Task 2");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Task 3");
