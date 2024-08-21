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
