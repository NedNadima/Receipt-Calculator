// Tip calculator app

food = Number(prompt("How much was your food?"))
tipPercentage = Number(prompt("How much do you want to tip?"))
tipAmount = food * tipPercentage
totalFoodbill = food + tipAmount
console.log("The tip amount is ", tipAmount)
console.log("The total foodbill is ",totalFoodbill)