document.addEventListener('DOMContentLoaded', () => {
    let part = document.cookie.split(';')[0];
    let size = part.split('=')[1]
    console.log(size);
    document.querySelector('p').style.fontSize = size + 'px';
})



document
    .querySelector('#btn10')
    .addEventListener('click', () => {
        document.cookie = "size=10;max-age=3600";
        document.querySelector('p').style.fontSize = 10 + 'px';
    });

document
    .querySelector('#btn20')
    .addEventListener('click', () => {
        document.cookie = "size=20;max-age=3600";
        document.querySelector('p').style.fontSize = 20 + 'px';
    });

document
    .querySelector('#btn30')
    .addEventListener('click', () => {
        document.cookie = "size=30;max-age=3600";
        document.querySelector('p').style.fontSize = 30 + 'px';
    });

document
    .querySelector('#btn40')
    .addEventListener('click', () => {
        document.cookie = "size=40;max-age=3600";
        document.querySelector('p').style.fontSize = 40 + 'px';
    });

document
    .querySelector('#btn50')
    .addEventListener('click', () => {
        document.cookie = "size=50;max-age=3600"
        document.querySelector('p').style.fontSize = 50 + 'px';
    });

document
    .querySelector('#btn60')
    .addEventListener('click', () => {
        document.cookie = "size=60;max-age=3600"
        document.querySelector('p').style.fontSize = 60 + 'px';
    });



document
    .querySelector('#btn70')
    .addEventListener('click', () => {
        document.cookie = "size=70;max-age=3600"
        document.querySelector('p').style.fontSize = 70 + 'px';
    });



document
    .querySelector('#btn80')
    .addEventListener('click', () => {
        document.cookie = "size=80;max-age=3600"
        document.querySelector('p').style.fontSize = 80 + 'px';
    });



document
    .querySelector('#btn90')
    .addEventListener('click', () => {
        document.cookie = "size=90;max-age=3600"
        document.querySelector('p').style.fontSize = 90 + 'px';
    });



document
    .querySelector('#btn100')
    .addEventListener('click', () => {
        document.cookie = "size=100;max-age=3600"
        document.querySelector('p').style.fontSize = 100 + 'px';
    });