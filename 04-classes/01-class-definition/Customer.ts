class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//lets create a new instance
let myData = new Customer("John", "Doe");

console.log(myData.firstName);
console.log (myData.lastName);
