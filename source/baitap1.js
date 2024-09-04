// function ketqua() {
//     let a =  +document.getElementById('a').value;
//     let b =  +document.getElementById('b').value;
//     let c = a % 12;
//     let d = b % 12;
//     let menAges;
//     let womanAges;
//     let result;
//
//     switch (c) {
//         case 0:
//             menAges = 'Thân';
//             break;
//         case 1:
//             menAges = 'Dậu';
//             break;
//         case 2:
//             menAges = 'Tuốt';
//             break;
//         case 3:
//             menAges = 'Hợi'
//             break;
//         case 4:
//             menAges = 'Tí'
//             break;
//         case 5:
//             menAges = 'Sửu'
//             break;
//         case 6:
//             menAges = 'Dần'
//             break;
//         case 7:
//             menAges = 'Mão'
//             break;
//         case 8:
//             menAges = 'Thìn'
//             break;
//         case 9:
//             menAges = 'Tị'
//             break;
//         case 10:
//             menAges = 'Ngọ'
//             break;
//         case 11:
//             menAges = 'Mùi'
//             break;
//     }
//     switch (d) {
//         case 0:
//             womanAges = 'Thân';
//             break;
//         case 1:
//             womanAges = 'Dậu';
//             break;
//         case 2:
//             womanAges = 'Tuốt';
//             break;
//         case 3:
//             womanAges = 'Hợi'
//             break;
//         case 4:
//             womanAges = 'Tí'
//             break;
//         case 5:
//             womanAges = 'Sửu'
//             break;
//         case 6:
//             womanAges = 'Dần'
//             break;
//         case 7:
//             womanAges = 'Mão'
//             break;
//         case 8:
//             womanAges = 'Thìn'
//             break;
//         case 9:
//             womanAges = 'Tị'
//             break;
//         case 10:
//             womanAges = 'Ngọ'
//             break;
//         case 11:
//             womanAges = 'Mùi'
//             break;
//     }
//
//     if ((menAges === 'Dần' && (womanAges === 'Tị' || womanAges === 'Thân' || womanAges === 'Hợi'))||
//     (menAges === 'Tị' && (womanAges === 'Dần' || womanAges === 'Thân' || womanAges === 'Hợi'))||
//     (menAges === 'Thân' && (womanAges === 'Dần' || womanAges === 'Tị' || womanAges === 'Hợi'))||
//     (menAges === 'Hợi' && (womanAges === 'Dần' || womanAges === 'Tị' || womanAges === 'Thân'))||
//     (menAges === 'Tí' && (womanAges === 'Mão' || womanAges === 'Ngọ' || womanAges === 'Dậu'))||
//     (menAges === 'Mão' && (womanAges === 'Tí' || womanAges === 'Ngọ' || womanAges === 'Dậu'))||
//     (menAges === 'Ngọ' && (womanAges === 'Tí' || womanAges === 'Mão' || womanAges === 'Dậu'))||
//     (menAges === 'Dậu' && (womanAges === 'Tí' || womanAges === 'Mão' || womanAges === 'Ngọ'))||
//     (menAges === 'Sửu' && (womanAges === 'Thìn' || womanAges === 'Mùi' || womanAges === 'Tuốt'))||
//     (menAges === 'Thìn' && (womanAges === 'Sửu' || womanAges === 'Mùi' || womanAges === 'Tuốt'))||
//     (menAges === 'Mùi' && (womanAges === 'Sửu' || womanAges === 'Thìn' || womanAges === 'Tuốt'))||
//     (menAges === 'Tuốt' && (womanAges === 'Sửu' || womanAges === 'Thìn' || womanAges === 'Mùi'))) {
//         result = 'hop nhau'
//     }else {
//         result = 'khong hop nhau'
//     }
//     document.getElementById('result').innerHTML ='result: ' + result;
// }


let i = 0;
let totalMoney = 0;
while (true) {
    totalMoney = totalMoney + 1120000000 + 10/100 * (totalMoney + 1120000000);
    if (totalMoney >= 20000000000){
        break;
    }
    i = i + 1
}
document.write('Ban can tiet kiem: ' + i + ' nam');


