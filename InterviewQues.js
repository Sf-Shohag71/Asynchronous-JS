const delay = (i) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
};

const timer = async(second) => {
  console.log("Start timer");
  for (var i = 0; i <= second; i++) {
    let result = await delay(i);
    console.log(result);
  }
  console.log("End timer");
};

timer(3);
