var CustomerData = /** @class */ (function () {
    function CustomerData(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(CustomerData.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerData.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerData;
}());
//lets create a new instance
var myInfo = new CustomerData("John", "Doe");
console.log(myInfo.firstName);
console.log(myInfo.lastName);
