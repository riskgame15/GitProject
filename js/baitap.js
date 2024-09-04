/* BAI 1
function showMessage() {
    alert('xin chao');
}
BAI 2
function showMessage() {
    document.getElementById("messageDiv").innerHTML ='xin chao';
}
Bai 3
function showMessage() {
    document.write('Xin chao');
}
Bai 4
function showMessage() {
    console.log('Xin chao');
}
/*
function tinhphi() {
    let z
    let kg = document.getElementById('C').value;
    if (kg < 5){
        z = 50000
    } else if (kg <= 10){
        z = 100000
    } else {
        z = 200000
    }
    let result = kg * z
    document.getElementById('result').innerHTML = 'result: ' + result
}
 */
function tinhtoan() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let result;
    if (a == 0){
        if (b == 0){
            if (c == 0){
                result="phương trình vô số nghiệm";
            } else{
               result= "phương trình vô nghiệm";
            }
        }else{
            result = -c/b
        }
    }else{
        let delta = (b * b) - (4 * a * c);
        if (delta < 0){
            result="phương trình vô nghiệm";
        } else if (delta === 0){
            result = -b/2*a;
        }else{
           let x1 = (-b + Math.sqrt(delta))/(2*a)
           let x2=(-b - Math.sqrt(delta))/(2*a);
           result= "x1= " + x1 + ' ; ' + "x2= " + x2
        }
    }
    document.getElementById("ketqua").innerHTML="result:" + result;
}