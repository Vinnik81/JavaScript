function random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// let x = 0;
// let y = 0;


// let boxObj = {
//     elem: document.querySelector('.box'),
//     top: 0,
//     left: 0
// }

// setInterval(() => {
//     // box.style.setProperty('top', `${random()}px`);
//     // box.style.setProperty('left', `${random()}px`);

//     // ''
//     // ""
//     // `${5+4}`
//     // box.style.setProperty('top', `${x}px`);
//     // box.style.setProperty('left', `${y}px`);
//     // console.log("==");
//     // x = y += 50;

//     boxObj.elem.style.setProperty('top', `${boxObj.top}px`);
//     boxObj.elem.style.setProperty('left', `${boxObj.left}px`);

//     boxObj.top += 100;
//     boxObj.left += 100;

// }, 1000);




// let box = document.querySelector('.box');

for (const box of document.querySelectorAll('.box')) {
    setInterval(() => {
        let styles = getComputedStyle(box);
        let top = random(0, 100) + parseInt(styles.top);
        let left = parseInt(styles.left) + random(0, 100);
        if (left >= window.innerWidth - 100) {
            console.log("Stena");
        }

        box.style.setProperty('top', `${top}px`);
        box.style.setProperty('left', `${left}px`);
    }, 1000);
}


// console.log(window.innerHeight);
// console.log(window.innerWidth);


// console.log(window.outerHeight);
// console.log(window.outerWidth);