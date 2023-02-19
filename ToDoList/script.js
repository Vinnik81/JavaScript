// document.forms.toDoForm.addEventListener('submit', () => {
//     event.preventDefault();

//     let item = document.createElement('li');
//     item.innerText = document.forms.toDoForm.title.value;

//     // item.addEventListener('click', () => {
//     //     event.target.classList.add('done');
//     // })

//     document.querySelector('#tasks').append(item);

//       //document.forms.toDoForm.title.value = '';
//     document.forms.toDoForm.reset();
// });



// for (const li of document.querySelectorAll('#tasks > li')) {
//     li.addEventListener('click', () => {
//         event.target.classList.add('done');
//     })
// }

//////////////////////////////////////////////////////


document.forms.toDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let item = document.createElement('li');
    item.innerHTML = document.forms.toDoForm.title.value + " <span>❌</span>";

    document.getElementById('tasks').append(item);

    //  document.forms.toDoForm.title.value = '';
    document.forms.toDoForm.reset();
});



document.querySelector('#tasks').addEventListener('click', () => {
    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains('done')) {
            event.target.classList.remove('done');
        } else {
            event.target.classList.add('done');
        }
    } else if (event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
    }
});
