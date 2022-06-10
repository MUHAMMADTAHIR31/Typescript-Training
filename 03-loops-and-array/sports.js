var sportsOne = ["Baseball", "Basketball", "Football", "Golf", "Hockey", "Soccer"];
// lets use the simplied for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Football") {
        console.log(tempSport + "<< My Favorite Sport");
    }
    else {
        console.log(tempSport);
    }
}
