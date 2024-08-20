// bai 1
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
 */
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

