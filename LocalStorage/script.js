document.addEventListener('DOMContentLoaded', () => {
    let size = localStorage.getItem("size");
    console.log(size);
    document.querySelector('p').style.fontSize = size;
})



document
    .querySelector('#btn10')
    .addEventListener('click', () => {
        localStorage.setItem('size', "10px");
        document.querySelector('p').style.fontSize = 10 + 'px';
    });

document
    .querySelector('#btn20')
    .addEventListener('click', () => {
        localStorage.setItem('size', "20px");
        document.querySelector('p').style.fontSize = 20 + 'px';
    });

document
    .querySelector('#btn30')
    .addEventListener('click', () => {
        localStorage.setItem('size', "30px");
        document.querySelector('p').style.fontSize = 30 + 'px';
    });

document
    .querySelector('#btn40')
    .addEventListener('click', () => {
        localStorage.setItem('size', "40px");
        document.querySelector('p').style.fontSize = 40 + 'px';
    });

document
    .querySelector('#btn50')
    .addEventListener('click', () => {
        localStorage.setItem('size', "50px");
        document.querySelector('p').style.fontSize = 50 + 'px';
    });

document
    .querySelector('#btn60')
    .addEventListener('click', () => {
        localStorage.setItem('size', "60px");
        document.querySelector('p').style.fontSize = 60 + 'px';
    });



document
    .querySelector('#btn70')
    .addEventListener('click', () => {
        localStorage.setItem('size', "70px");
        document.querySelector('p').style.fontSize = 70 + 'px';
    });



document
    .querySelector('#btn80')
    .addEventListener('click', () => {
        localStorage.setItem('size', "80px");
        document.querySelector('p').style.fontSize = 80 + 'px';
    });



document
    .querySelector('#btn90')
    .addEventListener('click', () => {
        localStorage.setItem('size', "90px");
        document.querySelector('p').style.fontSize = 90 + 'px';
    });



document
    .querySelector('#btn100')
    .addEventListener('click', () => {
        localStorage.setItem('size', "100px");
        document.querySelector('p').style.fontSize = 100 + 'px';
    });