// async function hello() { //after writing async keyword it becomes async function
//     console.log("hello"); //it prints hello but also return promise without any return val
// }

function api() { //basic function to call api
    return new promise((resolve, reject) => {
        console.log("Weather data");
        setTimeout(() => {
            console.log("Weather data");
            resolve("200"); //200 rep a successfull api call
        }, 2000);
    });;
}


// await api(); //wait till prev work will be finished
async function getWeatherData() {
    await api(); //1st call -> phle ye kam hoga 
    await api(); //2nd call ->
}

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
    await getData(1); //wait for some time which is settled in setimeout func call then execute next
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}