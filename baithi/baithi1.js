let M = [];
let sum = 0;
let count = 0;
while (true) {
    n = +prompt('nhap vao so phan tu cua mang')
    if (Number.isInteger(n)) {
        break;
    }
}
for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập vào phần tử thứ: ${i +1}`)
    M.push(input);
}
console.log(M);
for (let j = 0; j < M.length; j++) {
    if(j % 2 === 0){
        if(M[j] % 2 !== 0){
            sum += M[j];
            count++;
        }
    }
}
let tbc = sum / count;
document.write(tbc);