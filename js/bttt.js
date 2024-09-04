/*
Bai 1:
let vatli
let hoahoc
let sinhoc
vatli = +prompt('diem vat li')
hoahoc = +prompt('diem hoahoc')
sinhoc = +prompt('diem sinhoc')
let avg = (vatli +hoahoc + sinhoc)/3
let total = (vatli +hoahoc + sinhoc)
document.write('diem trung binh ' + avg)
document.write('<br>tong diem ' + total)
 */
// Bai 2:

// function chuyendoi(){
//     let doC=document.getElementById("c").value;
//     let doF = (9*doC / 5) + 32
//     document.getElementById("result").innerHTML= "result:" + doF;

// Bai 3,4:

// let r
// r = +prompt('ban kinh hinh tron')
// let chuvi = 2 * r * Math.PI
// let dientich = r * r * Math.PI
// document.write('chu vi hinh tron ' + chuvi)
// document.write('dien tich hinh tron ' + dientich)

/*
function changeMoney(){
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let result;
    if (fromCurrency == "USD" && toCurrency == "VND"){
        result = 'result ' + (amount * 25000) + 'Đ';
    }else if(fromCurrency == "VND" && toCurrency == "USD"){
        result = 'result ' + (amount / 25000) + '$'
    }else if(fromCurrency == "VND"){
        result = 'result ' + amount + 'VND'
    }else{
        result = 'result ' + amount + '$'
    }
    document.getElementById("result").innerHTML = result;
}
 */
// let n = parseInt(prompt('Nhập n số nguyên tố đầu tiên'))
// if (n === 2) {
//     document.write('n la so nguyen to')
// }
// for (let i = 2; i < n; i++)
/*
bai 1
 */



Bai 1
let i = 1
for (i = 1; i <= 20; i++) {
    console.log(i)
}
bai 2

let i = 2;
let sum = 0;
    while (i <= 50) {
        console.log(i);
        sum += i;
        i += 2;
    }
alert(sum);
 Bai 3

let i = 1;
let sum = 0;
for (i <= 99; i += 2) {
    console.log(i);
    sum += i;
}
alert(sum);

Bai 4
let n = +prompt('so nguyen duong')
let gt = 1;
for ( let i = 1; i <= n; i++) {
    console.log(i);
    gt *= i;
}
alert(n + '! = ' + gt)

bai 5
let a = +prompt('so 1');
let b = +prompt('so 2');
for ( let i = 1; i <= a; i++) {
    if (a % i == 0 && b % i == 0) {
        console.log(i);
    }
}




