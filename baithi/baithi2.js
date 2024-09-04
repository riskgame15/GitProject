function checkNumber(num1,num2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            sum1 += i;
        }
    }console.log(sum1);
    for (let j = 1; j < num2; j++) {
        if (num2 % j === 0) {
            sum2 += j;
        }
    }console.log(sum2);
    if (num2 === sum1 && num1 === sum2 ) {
        document.write('num1 và num2 là 2 số thân thiết');
    }else {
        document.write('num1 và num2 không phải là số thân thiết')
    }
}
checkNumber(50,100);