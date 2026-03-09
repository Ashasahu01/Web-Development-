//Create a new button element. Give it a text "click me", background color of red & text color of white.

//Insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
documnet.querySelector("body").prepend(newBtn);


//Createa <p> tag inhtml, give it a class& somestyling. Now create a new class in css and try to appendthis class to the <p> element.

//Did you notice howyou overwrite the class name when you add a new one?  solve this problemusing classList

let para = document.querySelector("p");

para.classList.add("newClass");