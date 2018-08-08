let greetUser = function () {
    console.log('Hello Mohamed!');
};

greetUser ();
greetUser ();
greetUser ();

let square = function (num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// ~~~~~~~~~~Challenge~~~~~~~~~~

let Celcius = function (num) {
    let result = 5/9 * (num - 32)
    return result
}

let Value = Celcius(32)
let OtherValue = Celcius(68)

console.log(Value)
console.log(OtherValue)