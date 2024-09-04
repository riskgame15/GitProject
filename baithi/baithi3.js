class Book{
    code = '';
    nameBook = '';
    yearRelease = 0;
    amount = 0;
    status = true;
    constructor(code, nameBook, yearRelease, amount){
        this.code = code;
        this.nameBook = nameBook;
        this.yearRelease = yearRelease;
        this.amount = amount;
    }
    displayInfor(){
        return `CodeBook: ${this.code} - nameBook: ${this.nameBook} - yearRelease: ${this.yearRelease} - Amount: ${this.amount}`;
    }
    changeName(newName){
        this.nameBook = newName;
    }
}