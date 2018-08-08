let gradeCalc = function (score, possibleScore) {
    return (score / possibleScore) * 100;
};

let result = gradeCalc(7000,10000);

if (result >= 90){
    console.log(`You got an A ${result}%`);
} 
else if (result >= 80 && result <= 89.9){
    console.log(`You got a B ${result}%`);
}
else if (result >= 70 && result <= 79.9){
    console.log(`You got a C ${result}%`);
}
else if (result >= 60 && result <= 69.9){
    console.log(`You got a D ${result}%`);
}
else if (result >= 0 && result <= 59.9){
    console.log(`You got an F ${result}%`);
}