// function onBox() {
//     console.log(event);
// }

// let box = document.querySelector('.box');

// box.onclick = onBox;
// box.onmousemove = onBox;


//box.addEventListener('click', onBox);

// box.addEventListener('click', function() {
//     console.log(event);
// })


// box.addEventListener('click', () => {
//     console.log(event);
// })



// div.addEventListener('click', () => {
//     if (event.target.tagName == 'DIV') {
//         console.log("div");
//         console.log(`Target =>`);
//         console.log(event.target);
//         console.log(`\n\n\nCurrent target => `);
//         console.log(event.currentTarget);
//     }
// })


// p.addEventListener('click', () => {
//     if (event.target.tagName == 'P') {
//         console.log("p");
//     }
// })


// span.addEventListener('click', () => {
//     if (event.target.tagName == 'SPAN') {
//         console.log("span");
//     }
// })




// let div = document.getElementById('div');
// let p = document.getElementById('p');
// let span = document.getElementById('span');


// div.addEventListener('click', () => {
//     console.log("div");
//     console.log(`Target =>`);
//     console.log(event.target);
//     console.log(`\n\n\nCurrent target => `);
//     console.log(event.currentTarget);
//     event.stopPropagation();
// });


// p.addEventListener('click', () => {
//     console.log("p");
//     // event.target.remove();
//     event.target.style.display = 'none';
//     event.stopPropagation();
// })


// span.addEventListener('click', () => {
//     console.log("span");
//     event.stopPropagation();
// })




// let link = document.querySelector('a');
// link.addEventListener('click', () => {
//     console.log('Click');
//     event.preventDefault();
// })



// let form = document.querySelector('form');
// form.addEventListener('submit', function() {
//     console.log('Click');
//     event.preventDefault();
// })


// let boxes = document.querySelectorAll('.box');

// for (const box of boxes) {

//     box.addEventListener('click', () => {
//         let num = parseInt(event.target.innerText);
//         num++;
//         if (num == 5) {
//             event.target.remove(); 
//         }
//         event.target.innerText = num;
//     })
// }


// let boxes = document.querySelectorAll('.box');

// for (const box of boxes) {

//     box.addEventListener('click', () => {
//         let num = parseInt(event.target.innerText);
//         num++;
//         if (num == 5) {
//             event.target.remove();
//             return;
//         }
//         event.target.innerText = num;
//     })
// }






// for (const box of boxes) {

//     box.addEventListener('click', () => {
//         let num = parseInt(event.target.innerText);
//         num++;
//         if (num == 5) {
//             event.target.remove();
//             return;
//         }
//         event.target.innerText = num;
//     })
// }



// let container = document.querySelector('.container');


// container.addEventListener('click', () => {

//     if (event.target.className == 'box') {
//         console.log("Click");
//         let num = parseInt(event.target.innerText);
//         num++;
//         if (num == 5) {
//             event.target.remove();
//             return;
//         }
//         event.target.innerText = num;
//     }
// });


let container = document.querySelector('.container');


container.addEventListener('click', () => {

    if (event.target.dataset.counter != undefined) {
        console.log("Click");
        let num = parseInt(event.target.dataset.counter);
        num++;
        if (num == 5) {
            event.target.remove();
            return;
        }
        event.target.dataset.counter = num;
    }
});