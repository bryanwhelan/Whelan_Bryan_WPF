//Bryan Whelan
//February 12, 2015
//Expressions Assignment

var item1 = prompt("Buy 3 items and get a 10% discount on your total purchase. \nPlease enter the price of you first item");
var item2 = prompt("Please enter the price of your second item.");
var item3 = prompt("Please enter the price of your third item.");

var total = Number(item1) + Number(item2) + Number(item3);//total sum of all three items
var discount = .1 * Number(total);//total sum of all three items multiplied by .1
console.log(discount); //print the output discount amount from the total sum of the purchase

alert("You will save $" + discount + " on your total purchase!");