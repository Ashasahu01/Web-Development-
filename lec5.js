//forEach -> use it when we have to perform some specific task on each val of array
 
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val){
    console.log(val);
});

let city = ["pune", "raipur", "mumbai"];

city.forEach((val) => {
    console.log(val.toUpperCase());
});