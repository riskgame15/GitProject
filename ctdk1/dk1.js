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
 */
let value = prompt('What is the "official" name of JavaScript?','');
if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}