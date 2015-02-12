//Bryan Whelan
//February 11, 2015
//Assignment - Slice of Pie part 1


var numberPeople = 16;
var numberPizzas = 4;
var slicesPerPizza = 8;
//multiply slices per pizza by the number of pizzas and divide by the number of people.
var slicesPerPerson = slicesPerPizza * numberPizzas / numberPeople;
//print the output slices of pizza per person
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");