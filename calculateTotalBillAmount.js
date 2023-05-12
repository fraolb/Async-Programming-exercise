const calculateTotalBillAfterDiscount = (billAmount, discountPercentage) => {
  setTimeout(() => {
    console.log(billAmount - billAmount * discountPercentage);
  });
};
const validateBillAmount = (billAmount) => {
  if (billAmount <= 0) {
    console.log("Invalid bill amount!");
  } else {
    console.log("Valid bill amount!");
  }
};
var billAmt = process.argv[2];
var discountPercentage = process.argv[3];

calculateTotalBillAfterDiscount(billAmt, discountPercentage);
//setTimeout(calculateTotalBillAfterDiscount, 2000, billAmt, discountPercentage)
validateBillAmount(billAmt);
