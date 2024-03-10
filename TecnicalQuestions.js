// Promise example
const promise = new Promise((resolve, reject) => {
  const random = Math.random() * 100;
  setTimeout(() => {
    if (random < 50) {
      resolve(random);
    } else {
      reject(console.log(`Computation is too high: ${random}`));
    }
  }, 3000);
});

promise.then((random)=> {
    console.log(`Computation result: ${random}`)
}).catch((error) => {
  console.error(`Error is occurred: ${error}`);
});
// In the example above, we created a promise, which resolves after a random time delay and returns the computed number unless the result is too high. If the computation is lower than 50, the promise resolves and logs the Computation result. However, when the computation is higher than 50, the promise is rejected and logs the Error occurred. Promises can also be chained. Multiple then() function can be called, connecting them with each other. Each then() function receives the result of the previous one.


