// console.log(window.document.children[0].children[1].children[1]);
// console.log(window);

//  window.document.children[0].children[1].children[1].innerText = 'Farid';
//  window.document.children[0].children[1].children[0].innerText = 'Farid';



// document.getElementById
// let elem = document.getElementById('header');
// elem.innerText = "Farid";

// document.getElementById('header').innerText = 'Farid';


// document.getElementsByTagName
// let arr = document.getElementsByTagName('h1');
// for (const item of arr) {
//     item.innerText = "Farid";
// }

// document.getElementsByTagName('h1')[0].innerText = 'Farid';





// document.getElementsByClassName
// document.getElementsByClassName('box')[0].innerText = 'Farid';


// document.getElementsByName
//


// document.querySelector
// document.querySelector('.box').innerText = 'Farid';


// document.querySelectorAll
// document.querySelectorAll('.box')[0].innerText = 'Farid';

// let arr = document.querySelectorAll('.box');

// for (const item of arr) {
//     item.innerText = 'Farid';
// }


// for (let i = 0; i < arr.length; i++) {
//     switch (i) {
//         case 1:
//             arr[i].innerText = 'Farid';
//             break;

//         case 2:
//             arr[i].innerText = 'Ivan';
//             break;

//         case 3:
//             arr[i].innerText = 'Sawa';
//             break;

//         case 4:
//             arr[i].innerText = 'Mawa';
//             break;

//         default:
//             break;
//     }

// }


// document.querySelector('#header + div').innerText = 'Farid';

// document.querySelectorAll('.box > .text')[2].innerText = 'Farid';



// let box = document.querySelector('.box');
// box.style.backgroundColor = 'green';
// console.log(box);
// console.dir(box);


// let boxes = document.querySelectorAll('.box');
// let count = 0;
// boxes.forEach(x => {
//     if (count++ % 2 != 0) {

//         // x.style.backgroundColor = 'blue';
//         // x.style = "background-color:blue !important";
//         x.style.setProperty('background-color', "blue", "important");
//     }

// })


// console.log(box);
// console.dir(box);