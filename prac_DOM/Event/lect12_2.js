function getData(dataId) {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

//-----------ASYNC-AWAIT-------------------------

async function getAllData() {
    console.log("getting data1...");
    await getData(1); //wait for some time which is settled in setimeout func call then execute next
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}

//-------------------IIFE -> Immediate invoked Function Expression------------------------------------

(async function() { //immediate call but only once

    console.log("getting data1...");
    await getData(1); //wait for some time which is settled in setimeout func call then execute next
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
})();

//-------PROMISE CHAIN ----------
//easier to understand than callback hell

console.log("getting data 1...");
getData(1).then((res) => {
        console.log("getting data 2...");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data 3...");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });

//callback hell -> so many callback inside prev one.

getData(1, () => { //2s delay then data 2
    console.log("getting data 2..");
    getData(2, () => { //2s delay then data 3
        console.log("getting data 3..");
        getData(3, () => {
            console.log("getting data 2..");
            getData(4);
        }); // smly if we want next data we will use => 
    });
});