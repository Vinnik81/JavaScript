// let h1 = document.querySelector('h1');
// //h1.innerText = "Bye";
// h1.innerHTML = "<h2>Bye</h2>";
// h1.outerHTML = "<h2>Bye</h2>";


// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', () => {
//     let list = document.querySelector('#list');
//     let text = prompt("Enter your name : ");

//     if (text) {
//         let li = document.createElement('li');
//         li.innerText = text;

//         let li2 = document.createElement('li');
//         li2.innerText = text;
//         // list.appendChild(li);
//         list.before(li2);
//         list.after(li);
//     }

//     //list.innerHTML += '<li>' + text + '</li>';


// })




// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', () => {
//     let list = document.querySelector('#list');
//     let text = prompt("Enter your name : ");

//     if (text) {
//         let li = document.createElement('li');
//         li.innerText = text;

//         let li2 = li.cloneNode(true);
//         // list.appendChild(li);
//         list.before(li2);
//         list.after(li.cloneNode(true));
//         list.append(li.cloneNode(true));
//         list.prepend(li);
//     }
// })


// document.querySelector('#clearBtn')
//     .addEventListener('click', () => {
//         document.querySelector('#list').innerHTML = '';
//     })




// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', () => {
//     let list = document.querySelector('#list');
//     let text = prompt("Enter your name : ");

//     if (text) {
//         let li = document.createElement('li');
//         li.className = 'list-group-item';
//         li.innerText = text;

//         list.append(li);
//     }
// })


// document.querySelector('#clearBtn')
//     .addEventListener('click', () => {
//         document.querySelector('#list').innerHTML = '';
//     })



let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
    let list = document.querySelector('#list');
    let text = prompt("Enter your name : ");

    if (text) {
        list.insertAdjacentHTML('beforeend', `
        <li class="list-group-item">${text}</li>
        `);
    }
})


document.querySelector('#clearBtn')
    .addEventListener('click', () => {
        document.querySelector('#list').innerHTML = '';
    })