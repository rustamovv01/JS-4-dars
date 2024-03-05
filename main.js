// let son = 10;

// if (son == 20) {
//     console.log('togri');
// } else if (son > 20){
//     console.log('katta');
// } else if (son < 20) {
//     console.log('kichik');
// } else {
//     console.log('notogri');
// }

// let son = Math.floor(Math.random()*100);

// if (son % 3 == 0 && son % 5 == 0) {
//     console.log('Front-972');
// } else if (son % 5 === 0) {
//     console.log('Front-969');
// } else if (son % 3 === 0) {
//     console.log('Front-964');
// } else {
//     console.log('3ga 5ga 15ga bolinmidi');
// }

// console.log(son);

let number = Math.round(Math.random()*100);

alert(number);

if(number % 3 === 0 && number % 5 === 0){
    alert(`${number}son 3gayam 5 gayam bolinadi`);
} else if( number % 5 ===0){
    alert(`${number}son 5ga bolinadi`);
} else if(number % 3 === 0){
    alert(`${number}son 3ga bolinadi`);
} else {
    alert('son 5 gayam 3 gayam bolinmaydi');
}