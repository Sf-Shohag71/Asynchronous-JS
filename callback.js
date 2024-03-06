const enrollSuccess = true;
const marks = 80;

const enroll = (callback) => {
  console.log("Please wait, Course enrollment is in progress...");
  setTimeout(() => {
    if (enrollSuccess) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 2000);
};
const progress = (callback) => {
  console.log("Checking your data...");
  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You couldn't enough marks to get the certificate");
    }
  }, 3000);
};
const getCertificate = () => {
  console.log("Please wait. We are searching your certificate...");
  setTimeout(() => {
    console.log("Congratulations!! you got the certificate.");
  }, 1000);
};

enroll(() => {
  progress(getCertificate);
});
