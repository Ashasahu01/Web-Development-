let button = document.getElementById("myId");
console.dir(button);
let headings = document.getElementByClassName("myClass");
console.dir(headings);
console.log(headings);

//--------------------------------------------------------------------------------------------------------------
//QuerySelector
let firstEl = document.querySelector(".myClass"); //1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("myClass"); //all elements
console.dir(allEl);