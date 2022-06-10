var reviews = [4.3, 5.1, 3.7, 2.1, 3.9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average is =" + average);
