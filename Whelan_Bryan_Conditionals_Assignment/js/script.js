//Bryan Whelan - Conditionals Assignment
//February 20, 2015


var discount = .1;
var boardPrice = 60;
var sponsored = true;

//if the price of the phone is less than our budget OR we won the lottery
if(discount < boardPrice || sponsored){
    console.log("You can buy a skateboard for a discount");
}else{
    console.log("You get a skateboard for free!");

    var kidHeight = 47;
    var minHeight = 48;
    var wParentHeight = 45; //the height of the kid with parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
    if(kidHeight > minHeight){
        //you can ride!
        console.log("You can ride the coaster!");
    }else if(kidHeight > wParentHeight){
        //you can ride with a parent present
        console.log("You can ride, but only with a parent present.")

    }else{
        //sorry you have growing to do
        console.log("Sorry kid, you've got some growing to do first!")