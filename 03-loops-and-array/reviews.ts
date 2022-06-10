let reviews: number[] = [4.3, 5.1, 3.7, 2.1, 3.9];

let total: number = 0;

for(let i=0; i<reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average is =" + average);

