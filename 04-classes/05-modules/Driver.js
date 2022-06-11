"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
//lets create a new instance
let myInfom = new Customer_1.Customer("John", "Doe");
console.log(myInfom.firstName);
console.log(myInfom.lastName);
