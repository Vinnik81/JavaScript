//1 save
//2 read
//

let arr = [];

document.addEventListener('DOMContentLoaded', () => {
    let json = localStorage.getItem("list");
    if (json) {
        let lists = JSON.parse(json);

        for (const item of lists) {
            drawItem(item);
        }
    }
});



document.forms.toDoForm.addEventListener('submit', () => {
    event.preventDefault();


    let item = {
        title: document.forms.toDoForm.title.value,
        id: Date.now(),
        isDone: false
    }
    drawItem(item);

    localStorage.setItem("list", JSON.stringify(arr));


    document.forms.toDoForm.reset();
});


function drawItem(obj) {
    let item = document.createElement('li');
    item.innerHTML = obj.title + " <span>❌</span>";
    if (obj.isDone) {
        item.classList.add('done');
    }
    item.dataset.id = obj.id;
    document.getElementById('tasks').append(item);
    arr.push(obj);
    console.log(arr);
}



document.querySelector('#tasks').addEventListener('click', () => {
    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains('done')) {
            event.target.classList.remove('done');
            let id = event.target.dataset.id;
            let item = arr.filter(i => i.id == id);
            console.log(item[0]);
            item[0].isDone = false;
            console.log(item[0]);
        } else {
            event.target.classList.add('done');
            let id = event.target.dataset.id;
            let item = arr.filter(i => i.id == id);
            console.log(item[0]);
            item[0].isDone = true;
            console.log(item[0]);
        }
    } else if (event.target.tagName == 'SPAN') {
        console.log(event.target.parentElement.dataset.id);
        let id = event.target.parentElement.dataset.id;
        arr = arr.filter(i => i.id != id);
        // localStorage.setItem("list", JSON.stringify(arr));
        event.target.parentElement.remove();
    }
    localStorage.setItem("list", JSON.stringify(arr));
});