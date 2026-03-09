//normal way to create an object in js 
const student = {
    fullName: "asha sahu",
    marks: 83.2,
    printMArks: function() {
        console.log("marks = ", this.marks);
    },
};

constemployee = {
    //one way to define a function (Simple way to define it in programming generally we use this way )
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    // // another way to define a function and both are correct
    // calcTax2: function() {
    //     console.log("Tax rate is 10%");
    // }
};
const karanArjun1 = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 50000,
};
const karanArjun3 = {
    salary: 50000,
};
const karanArjun4 = {
    salary: 50000,
};
const karanArjun5 = {
    salary: 50000,
    calcTax() {
        console.log("Tax rate is 20%"); // case like this when both object and method have same method ans obj's methos is envoked
    },
};

karanArjun1.__proto__ = employee; //this is how we can use the prototype of any object, after this we can directly use thefunction inside that object

//dierctly we can access all the function of object , not required to write the function everytime.
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee; //here we have assignedour employee class

//------------------------------------------------------------CLASSE------------------------------------------------------------------------------------------------------------------
//syntax -> let objName = new className()

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("createing new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

letlexus = new ToyotaCar("lexus", 12); // wecreate this with the help of class tht is why we can access all the prototypes
console.log(lexus);
let fortuner = new ToyotaCar("fortuner", 10); // constructor
fortuner.setBrand("fortuner");

//--------------------------------------------------------------------------INHERITANCE(PASSING DOWN FROM PARENTS TO CHILD CLASS)

// class Parent {
//     hello() {
//         console.log("Hello!");
//     }
// }

// class child extends Parent {

// }

class Person {
    constructor() {
        this.species = "homo Species";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        cosole.log("sleeps");
    }

    work() {
        console.log("Do some work");
    }
}

class Students extends Person {
    work() {
        console.log("Study.");
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve Problems");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let neha = new Students();

//--------------------------------------------------------------------Super Key ->call constructor of it's parents class------------------------------------------------------

class fruits {
    constructor() {
        console.log("Parents constructor");
    }
    colour() {
        console.log("fruit color");
    }
}

class Mango extends fruits {
    constructor(branch) {
        console.log("Child Constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit Child constructor");
    }

    colour() {
        console.log("Yellow");
    }
}