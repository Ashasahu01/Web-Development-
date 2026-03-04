let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// arr.forEach((val) => {
//     console.log(val * val);  //also can write it as val**2
// });

let calcSquare = (arr) => {
    console.log(num**2);
};

arr.forEach(calcSquare);

//----------------------------------------------------------------------------------------------------------------------
//MAP -> when we want to create any new array using res of existing array

let nums = [45, 65, 71];

let newArr = nums.map((val) => {
    return val**2;
});

console.log(newArr);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//FILTER -> store filter val in ner array

let nArr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArr = nArr.filter((val) => {
    return val % 2 === 0;
});

console.log(rvrnArr);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//REDUCE -> perform some operations and reduce array to a single value (ex - avg sum etc)
 
let num = [1, 2, 3, 4];

const output = num.reduce((res, curr) => {
    return res + curr;   //calculate sum of all the number 
});

console.log(output); 


//largest value
let values = [5, 6, 2, 1, 3];

const result = values.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(result); 