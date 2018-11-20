var taxRate = 0.2
var pricePhone = 99.99
var spendingThreshold = 500
var bankAccountBalance = 350



//loop for purchase as long as you have money
for (var i = 0; i <= 500; i = i + 99.9) {
    console.log( i );
}


//addition for taxes and print out
function addTax(pricePhone,taxRate) {
    addTax = pricePhone * taxRate;
    console.log("This amount of $" + addTax + " is added to your bill as federal taxes." )
}

//check total spent amout against personal account to see if you can pay for it or not

//