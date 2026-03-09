//you are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.


let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}
let student1 = new User("Asha", "abc@gmail.com");
let student2 = new User("neha", "xyz@gmail.com");

//Create a new class called Admin which inherits from User. add a new method called editData to admin that allows it to edit website data.

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = console.log("Enter data you wants to update");
        console.log("data = ", DATA);
    }
}

let admin1 = new Admin("nikita", "pqr@gmail.com");
admin1.editData();