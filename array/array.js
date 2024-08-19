/*
them phan tu vao cuoi mang
arr.push
lay ra va tra ve phan tu cuoi mang
arr.pop()
lay ra va tra ve phan tu dau mang
arr.shift()
them phan tu vao dau mang
arr.unshift()
hoat dong xoa phan tu bat dau tu vi tri 0 va tra ve 1 mang chua cac phan tu da xoa
arr.splice()

tim kiem phan tu trong co gia tri can tim la x
su dung ham filter de loc cac phan tu trong mang theo 1 dieu kien,tra ve 1 mang moi chua cac phan tu thoa man
arr.filter(value)
 */

/*
Bai 1

let array = [1, 2, 4, 6, 7, 10, 1];
let x = prompt('nhập giá trị cần tìm');
let count = 0;
for (const value of array) {
    if (value == x){
    console.log(value);
    count++
    }
}
alert(count)

Bai 2:

let x = 0;
let array = Array();
function addelement(){
    array[x] = document.getElementById('txtValue').value;
    alert('Element: ' + array[x] + 'Added at index ' + x);
    x++;
    document.getElementById('txtValue').value = '';
}
function hienthi(){
    let e = '<hr/>';
    for(let i = 0; i < array.length; i++){
        e += 'Element ' + i + ' = ' + array[i] + '<br/>';
    }
    document.getElementById('result').innerHTML = e;
}

Bai 3
let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x);


Bai 4
let value = prompt("Enter a number");
let numbers = [-3, 5, 1, 3, 2, 10];
let index = -1;
for (let i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
        alert('Value ' + numbers[i] + 'found at ' + i);
    }
}
if (index > -1){
    alert('value' + value + ' found at ' + index);
}else {
    alert('value' + value + 'not found');
}
 */

let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
        index = i;
    }
}
alert('max: ' + max + ' at position' + index)
