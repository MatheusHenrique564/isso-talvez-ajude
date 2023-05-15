// function calculate(a, b) {
//     return a + b;

// }
// console.log(calculate);
// let num1 = 5;
// let num2 = "10";

// console.log(num1);
// console.log(num2);

// let result = calculate(Number(num1), Number(num2));
// console.log(result);

// typeof(result);

// function reverseString(str) {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i --) {
//         reverseStr += str[i];
        
//     }
//     return reverseStr;
// }

// let string = "hello";
// let reversed = reverseString(string);
// console.log(reverseStr);



// let numbers = [5, 10, 2, 8, 3];

// function getSmallesNumber(numbers) {
//     let smallestNumber = numbers[0];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i];

//         }  
//     }
//     return smallestNumber;
    
// }

// let smallestNumber = getSmallesNumber(numbers);
// console.log(smallestNumber);
// console.log("O menor número é ") + smallestNumber;

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     else if (n < 0) {
//         return undefined
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }
// let result = factorial(-4);
// console.log(result);

var list = [];

function addEntrada() {
    var entrada = document.getElementById("campo").value;
    list.push(entrada);
    document.getElementById("campo").value = "";
    console.log(list);

    var contArr = "";
    for (let i = 0; i < list.length; i++) {
        contArr += `<p class = top> ${list[i]} </p>`;
    }
    document.getElementById("result").innerHTML = contArr
}