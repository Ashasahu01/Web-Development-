letbtn1 = document.querySelector("btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type); //this will show the event type
//     console.log(evt.target); //
//     console.log(evt.clientX, evt.clientY);
// };
// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type); //mouse event
//     console.log(evt.target); //
//     console.log(evt.clientX, evt.clientY); //77,130
// }

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
});

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked - handler 2");
});

btn1.removeEventListener("click", () => {
    console.log("button 1 was clicked - handler 2");
});

//both add and remove for handler2has samestatement does not mean they are sme or their work are they take diff space inside memory

//both the add and removemust be same funcition which we are passing in remove. westore that function in a variable and call them at the timeof removal

const handler3 = ("click", () => {
    console.log("button1 was clicked - handler3");

});
btn1.addEventListener("click", handler3);

btn1.removeEventListener("click", handler3); //nowcallback will notcall here again as we remove it from our button1.