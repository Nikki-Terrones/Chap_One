// Practice statements from Chap 1 in Head First Js
var price = 28.99;
var discount = 10;
var total =
  price - (price * (discount / 100));
if (total > 25) {
  freeShipping ();
}

var count = 10;
while (count > 0) {
  juggle();
  count = count - 1;
}

var dog = {name: "Rover", weight: 35};
if (dog.weight > 30) {
  alert ("WOFF WOOF");
} else {
  alert("woof woof");
}

var circleRadius = 20;
var circleArea =
  Math.PI * (circleRadius * circleRadius);

var age = 25;
var name = "Owen";
if (age > 14) {
  alert("Sorry this page is for kids only!");
} else {
  alert ("Welcome " + name + "!");
}

