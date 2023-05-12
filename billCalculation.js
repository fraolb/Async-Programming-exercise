
const calculateTotalBill =(billAmt, discountPercentage)=>{
    return new Promise((resolve, reject)=>{
        if(discountPercentage < 0){
            reject('Invalid discount percentage!')
        }
        resolve(billAmt - (billAmt*discountPercentage))
    },2000)
}

billAmt = process.argv[2]
discountPercentage = process.argv[3]

calculateTotalBill(billAmt, discountPercentage).then((result)=>{
    console.log("The discounted bill amount is ",result)
}, error =>{
    console.log(error)
})