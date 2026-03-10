function asyncFunc1() { //this work is generally done by API's
    return newPromise((resolve, reject) => {
        setTimeout(() => { //as our func is async
            console.log("Dsta1");
            resolve("success");
        }, 3000);
    });
}

function asyncFunc2() { //this work is generally done by API's
    return newPromise((resolve, reject) => {
        setTimeout(() => { //as our func is async
            console.log("Dsta1");
            resolve("success");
        }, 2000);
    });
}

//-----BUT in this way they both execute at same time for that we use promise chain-> then inside then-------

console.log("Fetching Data 1...");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data 2...");
    let p2 = asyncFunc();
    p2.then((res) => {});
});

// console.log("Fetching Data 1...");
// let p2 = asyncFunc2();
// p1.then((res) => {
//     console.log(res);
// });

//-------PROMISE CHAIN ----------
//easier to understand than callback hell

getData(1).then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(success);
    });