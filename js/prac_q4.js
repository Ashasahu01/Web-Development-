// Write a code which can give grades to student according to their score
let score = prompt("Enter your score : ");

if(score >= 90 && score <= 100){
    console.log("A");
}
else if(score >= 70 && score <= 89){
    console.log("B");
}
else if(score >= 60 && score <= 69){
    console.log("C");
}
else if(score >= 50 && score <= 59){
    console.log("D");
}
else{
    console.log("F");
}