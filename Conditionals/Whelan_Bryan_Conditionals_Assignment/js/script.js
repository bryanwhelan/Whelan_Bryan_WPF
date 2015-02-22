//Bryan Whelan
//February 21, 2015
//Conditionals Assignment

alert("To determine if you're eligible to compete in the skateboard contest please answer the following questions...");

//Variables
var vertTricks = prompt("Please enter how many vert tricks you can do:");
var techTricks = prompt("Please enter how many tech tricks can you do:");
var sponsors = prompt("Please enter number of sponsors you have:");
//if the total number of tricks combined are greater than ten you may compete.
if(Number(vertTricks) + Number(techTricks) > 10){
    console.log("Congratulations! You may compete in the skateboard contest!");
//if the total number of tricks are less than ten but, you have at least one sponsor you may compete.
}else if (Number(vertTricks) + Number(techTricks) < 10 && Number(sponsors) >= 1){
    console.log("You may not have the tricks but you got the sponsors! \nCongratulations you may compete in the contest!")
//if the total number of tricks are less then 10 and you don't have any sponsors try again next year.
}else{
    console.log("Sorry you won't be able to compete this year but keep skating and try again next year!");
}
