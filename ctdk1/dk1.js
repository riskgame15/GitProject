/*
et year = parseInt(prompt('enter a year'))
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert("is a leap year")
        } else {
            alert(`is not a leap year`)
        }
    }else {
        alert(`is a leap year`)
    }
}else {
    alert(`is not a leap year`);
}

let value = prompt('What is the "official" name of JavaScript?','');
if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

let useName = prompt("who's there", '')
if (useName == 'Admin'){
    let pass = prompt("password", '');
    if (pass == 'TheMaster'){
        alert("Welcome");
    }else if(pass == null){
        alert("Canceled");
    }else{
        alert('Wrong password');
    }

}else if (useName == null){
    alert("Canceled");
}else {
    alert("I don't know you");
}

// Bai 1
let browser = prompt('Enter browser name')
switch (browser) {
    case 'Edge':
        alert('You have got the Edge!');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('we hope that this page looks ok !');
}
// Bai 2

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
// Bai 3
let value = +prompt('Type a number', 0)
if (value > 0) {
    alert(1);
}else if (value < 0){
    alert(-1);
}else {
    alert(0);
}
 */

// Bai 1
 let a = prompt('a: ');
 let b = prompt('b: ');
 result = (a + b < 4) ? 'Below' : 'Over';
 document.write(result);

// Bai 2
let login = prompt('Enter:');
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);

