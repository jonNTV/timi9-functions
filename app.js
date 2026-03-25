
// for(let i = 10; i >= 0; i--){
//    console.log(i);
//}

let i = 0;

while(i < 5){
    console.log(i);
    i++;
}

let win = false;

while( win === false){
    console.log("keyrir tölvuleikinn");

    win = true;
    console.log("JIBBI ÞU VANNST")
}

function greeting(){
    console.log("Halló úr falli");
}

for(let i = 1; i <= 10; i++){
    greeting();
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

function greet(firstName, lastName){
    return firstName + " " + lastName
}

console.log(greet("Ingvarsson", "Jón"));

function add(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

function decrement(num1, num2){
    console.log(num1 - num2)
    return num1 - num2;
}

function multiply(num1, num2){
    console.log(num1 * num2)
    return num1 * num2;
}

function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false
    }
}

add(18383, 737373)
decrement(5, 10)
multiply(10,10);

console.log(isEven(123471274892373488))


