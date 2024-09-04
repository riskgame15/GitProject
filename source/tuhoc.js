// let n = 5;
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//     gt *= i;
// }
// console.log(`${n}! = ${gt}`);

// Bai tap dem so ki tu
const inputString = prompt("Nhap vao 1 chuoi");

let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;

for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
    let char = inputString[i];
    if (char >= 'a' && char <= 'z') {
        lowerCaseCount++;
    }else if (char >= 'A' && char <= 'Z') {
        upperCaseCount++;
    }else if (char >= '0' && char <= '9') {
        digitCount++;
    }else if (char === '') {
        spaceCount++;
    }
}
console.log('So ky tu thuong: ' + lowerCaseCount);
console.log('So ky tu hoa: ' + upperCaseCount);
console.log('So ky tu so: ' + digitCount);
console.log('So ky tu rong: ' + spaceCount);

// bai tap kiem tra tinh hop le cua mat khau

// tao ham kiem tra tinh hop le cua mat khau
function isPasswordValid(password){
    if (password.length < 6) {
        return false;
    }
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigits = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= '0' && char <= '9') {
            hasUpperCase = true;
        }
    }
    return hasLowerCase && hasUpperCase && hasUpperCase;
}

// set mat khau
function setPassword(){
    let password = prompt("Moi thiet lap mat khau: ");
    if (isPasswordValid(password)){
        alert('Dat mat khau thanh cong! Mat khau: ' + password);
        return password;
    }else {
        alert(`Mat khau khong hop le:
        1. Co it nhat 6 ky tu
        2. Co it nhat 1 so
        3. Co it nhat 1 ky tu viet hoa
        4. Co it nhat 1 ky tu viet thuong`);
        setPassword();
    }
}
// BAI TAP TINH TUOI TU NAM SINH

function calculateAge(inputYear){
    let yearOfBirth = Number(inputYear);
    if (!Number.isInteger(yearOfBirth)|| yearOfBirth <= 0){
        alert("Năm sinh ko hợp lệ. Năm sinh là số nguyên lớn hơn 0");
        return ;
    }
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;
    alert(`Tuoi cua ban la ${age} tuoi`)
}
let inputYear = prompt('Nhap nam sinh cua ban');
calculateAge(inputYear);

// BAI TAP COUNTDOWN TIMER
function countdown(minutes) {
    alert('thoi gian lam bai cua ban la: ' + minutes + 'phut')
    let seconds = minutes * 60;
    let countdownInterval = setInterval(function () {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;
        let prefixSecondFormat = secondsLeft < 10 ? '0' : '';
        console.log(`${minutesLeft}:${prefixSecondFormat}${secondsLeft}`);
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            alert('het thoi gian')
        } else {
            seconds--;
        }
    }, 1000)
}
let timeInput = Number(prompt('nhap vao thoi gian lam bai'))
countdown(timeInput)

// BAI TAP NHAP VAO SO NGUYEN TU BAN PHIM
let M = [];
let n;
while (true){
    n = Number(prompt(`
    nhap vao so phan tu cua mang
    luu y so phan tu phai lon hon 0
    `));
    if (Number.isInteger(n) && n > 0) {
        break;
    }
}console.log('so phan tu cua mang la: ' + n)
for (let i = 0; i < n; i++) {
    let input = Number(prompt(`moi nhap vao phan tu thu: ${i + 1}`))
    M.push(input);
}console.log(M)


