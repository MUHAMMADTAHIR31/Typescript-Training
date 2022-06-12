"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cricket_1 = require("./Cricket");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new Cricket_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches...initially empty
let theCoaches = [];
//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
