var lis1 = [];


function b1() {
    var entrada = document.getElementById("list1").value;
    lis1.push(entrada);
    document.getElementById("list1").value = "";
    console.log(lis1);

    var contArr = "";
    for (let i = 0; i < lis1.length; i++) {
        contArr += `<p class = top> ${lis1[i]} </p>`;
    }
    document.getElementById("result1").innerHTML = contArr
}

var lis2 = [];


function b2() {
    var entrada = document.getElementById("list2").value;
    lis2.push(entrada);
    document.getElementById("list2").value = "";
    console.log(lis2);

    var contArr = "";
    for (let i = 0; i < lis2.length; i++) {
        contArr += `<p class = top> ${lis2[i]} </p>`;
    }
    document.getElementById("result2").innerHTML = contArr
}