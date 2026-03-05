let h2 = document.querySelector("h2");
console.dir(h2.innerText);

//append sentence
h2.innerText = h2.innerText + " from Apna College Students."; //concatenate strings
// 


let divs = document.querySelectorAll(".box");
console.log(divs[0]); //we can access each div by their index same as array

//in this way we can change text content
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

//access with the help of for loop
let idx = 1;
for (div of divs) {
    // console.log(div.innerText); //this will show original val which we have written in our html file

    div.innerText = `new unique value $ { idx }`;
    idx++;
}