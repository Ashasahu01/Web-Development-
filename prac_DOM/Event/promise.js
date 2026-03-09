// let promise = newPromise((resolve, reject) => {
//     console.log("I am a promise"); // pending state

//     reject("some error occured."); // reject state -> show error in console(same msg will print their)
// });
// 
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// //in console
// // let finalVal = getData()23);first it will showstate as pending but once it resturns datanow afteranother call it willsho fulfilled

const getPromise = () => {
    newPromise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("123");
        reject("network  error.");
    });
};
let promise = getPromise();
promise.then((res) => { //this func will call if the prom get fulfilled
    console.log("Promise fulfilled.", res);
});
promise.catch((err) => { //call when prom get rejected
    console.log("Promise rejected", err);
})