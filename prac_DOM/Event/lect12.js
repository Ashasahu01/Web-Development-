// async wait >> promise chains >> callback hell

function hello() {
    console.log("hello");
}
setTimeout(hello, 2000); //timeout, 2s =  2000

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) { //not necessary to write callback in func name
    sumCallback(a, b);
}

calculator(1, 2, sum); //we cannot pass sum() hereas they know we are passing func as a parameter

calculator(1, 2, (a, b) => { //this also does the same 
    console.log(a + b);
})

//nesting

let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

//----------------------------------------------------------CALLBACK HELL->nested callbackstacked---------------------------------

function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}


//callback hell -> so many callback inside prev one.
getData(1, () => { //2s delay then data 2
    getData(2, () => { //2s delay then data 3
        getData(3); // smly if we want next data we will use => 
    });
});