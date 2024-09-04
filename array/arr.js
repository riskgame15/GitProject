// myColor = ['Red', 'Green', 'White', 'Black'];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));
// Bai 2
// let num = window.prompt('Enter a number');
// let str = num.toString();
// let result = [str[0]];
// for (let i = 1; i < str.length; i++) {
//     if(str[i - 1] % 2 === 0 && str[i] % 2 ===0){
//         result.push('-',str[i]);
//     }else {
//         result.push(str[i]);
//     }
// }
// console.log(result.join(''));

// Bai 3
// let str = 'c';
// let Upper = 'DFGSFHGFDH';
// let Lower = 'dsgdshafd';
// let result = [];
// for (let i = 0; i < str.length; i++) {
//     if (Upper.indexOf(str[i]) !== -1) {
//         result.push(str[i].toLowerCase());
//     }else if (Lower.indexOf(str[i]) !== -1) {
//         result.push(str[i].toUpperCase());
//     }else {
//         result.push(str[i]);
//     }
// }
// console.log(result.join(''));

/*
// Bai 4
let arr = [2, 4, 5, 6, 20];
let x = +prompt('Enter a number')
let index = -1;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
        index = i;
        break
    }
}

function translate() {
    let arr_eng = ['banana', 'apple', 'orange', 'chair', 'pen', 'pencil', 'book', 'lemon'];
    let arr_vie = ['chuối', 'táo', 'cam', 'cái ghế', 'bút', 'bút chì', 'sách', 'chanh'];
    let result = '';
    let string = document.getElementById('string').value;
    let index_eng = 0;
    for (let i = 0; i < arr_eng.length; i++) {
        if (arr_eng[i] == string) {
            index_eng = i;
        }
        for (j = 0; j < arr_vie.length; j++) {
            if (index_eng == j) {
                result = arr_vie[j];
            }
        }
    } document.getElementById('result').innerHTML = result;
}
 */

// function translate(arr, value) {
//     let string = document.getElementById('string').value;
//     let index = indexOf(arr,value);
//     if (index !== -1) {
//     document.getElementById("result").innerText = arr_[index];
//     } else {
//     document.getElementById("result").innerText = "not found";
//     }
// }

// Thuc hanh su dung vong lap long nhau
/*
let x = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
let i = 1;
let j = 1;
while (i <= 10) {
    x += '<tr>';
    while (j <= 10) {
        x += '<td>' + i * j + '</td>';
        j++;
    }
    x += '</tr>';
    j =1;
    i++;
}x += '</table>';
document.write(x);
 */

// bai 3:  ve 4 hinh tam giac

// let a = +prompt('chieu dai')
// let b = +prompt('chieu rong')
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write('*')
//     }document.write('<br>');
// }
//
//
// for (let i = 0; i < a; i++) {
//     for (let j = a ; j > i; j--) {
//         document.write('*')
//     }document.write('<br>');
// }
//
//
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < (a-i); j++) {
//         document.write('&nbsp&nbsp');
//     }
//     for (let j = 0; j < i; j++) {
//         document.write('*')
//     }document.write('<br>');
// }
//
//
// for (let i = 1; i < a; i++) {
//     for (let j = a ; j > i; j--) {
//         document.write('*')
//     }document.write('<br>');
//     for (let j = 0; j < i; j++) {
//         document.write('&nbsp&nbsp');
//     }
// }

// bai 4 ve hinh chu nhat rong

for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
        if (i === 0 || i === a -1 || j === 0 || j === b-1) {
        document.write('*')
        }else {
            document.write('&nbsp&nbsp')
        }
    }document.write('<br>');
}

// bai 5 tinh tien lai ngan hang
// let i = 0;
// let totalMoney = 0;
// while (true) {
//     totalMoney = totalMoney + 1120000000 + 10/100 * (totalMoney + 1120000000);
//     if (totalMoney >= 20000000000){
//         break;
//     }
//     i = i + 1
// }
// document.write('Ban can tiet kiem: ' + i + ' nam');

for( let i= 1; i < 6; i++) {
    console.log(i);
}
let i = 1;
while (i < 6){
    console.log(i);
    i++
}
