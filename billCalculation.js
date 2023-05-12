
const calculateTotalBill =(billAmt, discountPercentage)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(discountPercentage < 0){
            reject('Invalid discount percentage!')
        }
        resolve(billAmt - (billAmt*discountPercentage))
    }, 2000)
    })
}
const validateBill=(billAmt)=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        if(billAmt < 0){
            reject("Invalid bill amount!")
        }
        resolve(billAmt)
       })
    })
}

billAmt = process.argv[2]
discountPercentage = process.argv[3]

// calculateTotalBill(billAmt, discountPercentage).then((result)=>{
//     console.log("The discounted bill amount is ",result)
// }, error =>{
//     console.log(error)
// })
validateBill(billAmt).then((amount)=>{
   return calculateTotalBill(amount, discountPercentage);console.log(amount)
}).then((result)=>{console.log("The discounted bill amount is ", result)}).catch(error=>{
    console.log(error)
})