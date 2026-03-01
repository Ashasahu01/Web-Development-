let a = 5;
let b = 2;

//binary operators
console.log("a = ", a, "& b = ", b);
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);  //reminder
console.log("a ** b = ",a ** b);  //exponential

//-------------------------------------------------------
a = 6;
//unary operators

//inc & dec operators
console.log("a++ = ", a++);  //first print the value then increment
console.log("++a + ", ++a);  //first increment the value then print

//assignment operator
 //(+=, -+, *=, /=, ==)

 //--------------------------------------------------
 //Comparison operator
 //(==, === (equal to & type), !=(not equal to), !==(not equal & type), >, >=, <, <=)
 let x = 5;   //number
 let y = "5";  //string

 console.log("a == b", a == b); //true
 console.log("a === b", a === b); //false

 //--------------------------------------------------
//  logical Operator(AND && , OR || , NOT !)

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// Conditional Statement(if, else if,if else)
let age = 22;

//if 
if(age>18){
    console.log("You can vote");
}

//if else
if(age>18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

//else if
if(age>18){
    console.log("You can vote");
}
else if(age>=13 || age <=17){
    console.log("You will going take part in next election");
}
else{
    console.log("You cannot vote");
}


//--------------------------------------------------------------------------------
//Ternary operator (cond ? true o/p : false o/p)
let age = 16;

console.log(age > 18 ? "Adult" : "not an adult");

//alert -> one time popup
alert("Keep going...");

//prompt -> it popup but also can take value
prompt("your name?");