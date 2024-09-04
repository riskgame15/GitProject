// tao object tu class Student
// const student1 = new Student("SV01", "Doan van Hau", "hau@gmail.com", "09989890", "C0724G1");
// const student2 = new Student("SV02", "Doan van Nam", "nam@gmail.com", "09989891", "C0724G1");
//
// // goi phuong thuc cua doi tuong object.methodName()
// document.write(student1.displayInfo())
// document.write("<br>")
// document.write(student2.displayInfo())


// tao 1 mang chua danh sach sinh vien
const listBook = [];


function createBook(n){
    for (let i = 1; i <= n; i++) {
        const book = new Book(`Mã số${i}`, `Tên sách ${i}`, `${i}, ")
        listBook.push(student);
    }
}

createBook(10);

function showListStudent(){
    let html = "";
    listBook.forEach((student, index) => {
        html += `<tr>`;
        html += `<td>${index + 1}</td>`;
        html += `<td>${book.code}</td>`;
        html += `<td>${Book.nameBook}</td>`;
        html += `<td>${Book.yearRelease}</td>`;
        html += `<td>${Book.amount}</td>`;
        html += `<td>${Book.status}</td>`;
        html += `<td><button onclick="deleteBook(${index})">Delete</button></td>`;
        html += `</tr>`;
        html += `</tr>`;
    })

    document.getElementById("list-student").innerHTML = html;
}

showListBook();

function deleteBook(index) {
    listBook.splice(index, 1);
    showListBook();
}

addBook()