/*
// Bai 1
function convert(){
    let input    = +document.getElementById("value").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == 'Meter' && to == 'Feet'){
        result = input * 0.305;
    }else if (from == 'Feet' && to == 'Meter'){
        result = input * 3.279;
    }else {
        result = input
    }document.getElementById('output').innerHTML = result;
}
 */

let x = +prompt('nhap vao 1 so lon hon 0')
function isSNT() {
    let check = true;
    if (x === 2) {
        check = true;
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                check = false;
                break;
            }
        }
    }if (check == true) {
        alert(x + 'la so nguyen to')
    }else {
        alert(x + ' khong la so nguyen to')
    }
}
isSNT()