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
