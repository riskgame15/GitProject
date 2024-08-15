//  chu thich
/* phan biet cac event

-- event tac dong tu con chuot may tinh
    + click
    + move
-- su kien tu ban phim
    + input
-- su kien tu tac vao doi tuong window
 */
// bài tập tính số tiền nhận được với lãi suất y%/năm
/* let x= +prompt("nhap so tien muon gui");
let y= +prompt("nhap so thang gui");

let g = 5/100;
let moneyOneMonth = g/12*x;
let totalMoney = x + y * moneyOneMonth;

document.write("Tong so tien nhan lai: " + totalMoney ); */

// bai 1
// let i = 10
// let f = 20.5
// let b = true
// let s = 'Hà Nội'
// document.write('i = ' + i)
// document.write('<br/>')
// document.write('f = ' + f);
// document.write('<br/>')
// document.write('b = ' + b);
// document.write('<br/>')
// document.write('s = ' + s );
//
// // bai 2
// let Width = 20
// let Height = 10
// let Area = width * height
// document.write('<br>area = ' + area);

/* bai 3
function evenClickButton(){
    let valueA = input.value;
    let valueB = input.value;
    let result = number(valueA) + number(valueB)

    let resultH2 = document.getElementById("result");
    resultH2.innerHTML= result;

 */

// Thuat toan chung tat ca cac bai

/*
    b1: lay gia tri input
    b2: thuc hien tinh toan - thuat toan
    b3: Hien thi dau ra

let inputWidth
let inputHeight
inputWidth = prompt('Enter the width')
inputHeight = prompt('Enter the height')
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height
document.write('<br> the area is ' + area);
*/


// Bai tap ung dung may tinh

function phepcong() {
    let st1 = +document.getElementById("st1").value;
    let st2 = +document.getElementById("st2").value;
    let result;
    result = st1 + st2;
    document.getElementById("result").innerHTML = 'result: ' + result;
}
function pheptru() {
    let st1 = +document.getElementById("st1").value;
    let st2 = +document.getElementById("st2").value;
    let result;
    result = st1 - st2;
    document.getElementById("result").innerHTML = 'result: ' + result;
}



