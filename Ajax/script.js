// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/Abdullayev999');
// console.log(Date.now());
// // xhr.onload = function() {
// //     let data = JSON.parse(xhr.response);
// //     console.log(data.login);
// // }

// xhr.onloadend = function() {
//     let data = JSON.parse(xhr.response);
//     console.log(data.login);
// }

// xhr.send();
// console.log(Date.now());


// main();


// async function main() {
//     try {
//         let data = await getRequestAsync('https://api.github.com/users/Abdullayev999');

//         let json = JSON.parse(data);
//         console.log(json);
//     } catch (error) {
//         console.error(error);
//     }
// }




// //https://api.github.com/users/Abdullayev999
// function getRequestAsync(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);

//         xhr.onload = function() {
//             resolve(xhr.response);
//         }

//         xhr.onerror = function() {
//             reject(new Error(xhr.statusText))
//         }

//         xhr.send();
//     })
// }



main();


async function main() {
    try {
        let response = await fetch('https://api.github.com/users/Abdullayev999', { method: 'GET' });
        let data = await response.json();
        console.log(data);


        let imageResponse = await fetch(data.avatar_url);
        let imgBlob = await imageResponse.blob();

        let imgUr = URL.createObjectURL(imgBlob);

        let reader = new FileReader();
        reader.readAsDataURL(imgBlob);
        reader.onload = function() {
            let base64data = reader.result;
            console.log(base64data);
        }

        // document.getElementById('userPhoto').setAttribute('src', data.avatar_url);
        document.getElementById('userPhoto').setAttribute('src', imgUr);
        // let json = JSON.parse(data);
        // console.log(json);
    } catch (error) {
        console.error(error);
    }
}