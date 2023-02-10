let arr = [
    './orel.jpg', './Без названия (3).png', './pitak.jpg', './1476977754.jpg'
];


function random(min = 0, max = 4) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let cardBtns = document.querySelectorAll('.card .btn');
for (const btn of cardBtns) {
    btn.addEventListener('click', () => {
        console.log('Click');
        //   console.dir(event.target.parentElement.previousElementSibling);
        //   console.dir(event.target.previousElementSibling.previousElementSibling);
        let index = random();
        console.log(index);
        event.target.parentElement.previousElementSibling.src = arr[index];
    })
}



/*
parantElement
children
lastElementChild
firstElementChild
previousElementSibling
nextElementSibling
*/
