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