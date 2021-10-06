let powerOf = function (power) {
    let innerFunction = function (value) {
        let sum = 1;
        for (let i = 0; i < power; i++) 
        {  sum = sum * value; }
        return sum;
    }
    return innerFunction;
};


let powerOfTwo = powerOf(2);
let powerOfTen = powerOf(10); 

// DO NOT change the lines below
console.log(powerOfTwo(3));
console.log(powerOfTen(3));
