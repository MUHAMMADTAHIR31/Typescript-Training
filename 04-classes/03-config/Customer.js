"use strict";
class CustomerData {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//lets create a new instance
let myInfom = new CustomerData("John", "Doe");
console.log(myInfom.firstName);
console.log(myInfom.lastName);
