// console.log('Start ' + Date.now());



// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.append(script);

// }


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log("Script loaded");
//         callback();
//     }

//     script.onerror = function() {
//         console.log("Script error");
//     }

//     document.body.append(script);

// }

// loadScript('one.js', function() {
//     one();;
// });

// // setTimeout(() => {
// //     one();
// // }, 500);

// console.log(' End  ' + Date.now());

//one();





// console.log('Start ' + Date.now());

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         // reject('Error');
//         resolve('Done!');

//         // resolve('Done!');
//     }, 2000);

//     // reject('Error');
// });




// promise.then(function(result) {
//     console.log(result);
// }, function(error) {
//     console.log(error);
// })



// promise.then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.error(error);
// })


// promise.then(
//     result => console.log(result),
//     error => console.error(error),
// )


// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(console.error(error)))
//     .finally(() => console.log('FINALLY'));




// loadScriptAsync('one.js').then(result => one());
// loadScriptAsync('two.js').then(result => two());
// loadScriptAsync('three.js').then(result => three());





// loadScriptAsync('one.js1')
//     .then(result => one())
//     .catch(error => console.error(error));



// Promise.race([
//     loadScriptAsync('two.js'),
//     loadScriptAsync('one.js'),
//     loadScriptAsync('three.js'),
// ]).then(result => console.log(result));


// Promise.all([
//     loadScriptAsync('two.js'),
//     loadScriptAsync('one.js'),
//     loadScriptAsync('three.js')
// ]).then(results => {
//     one();
//     two();
//     three();


//     console.log('All loaded!!!');

//     for (const result of results) {
//         console.log(result);
//     }
// })




// let promise1 = loadScriptAsync('one.js');

// let promise2 = promise1.then(result => {
//     one();
//     return loadScriptAsync('two.js');
// });

// let promise3 = promise2.then(result => {
//     two();
//     return loadScriptAsync('three.js');
// });

// promise3.then(result => {
//     three();
// });


// loadScriptAsync('one.js').then(result => {
//     one();
//     return loadScriptAsync('two.js');
// }).then(result => {
//     two();
//     return loadScriptAsync('three.js');
// }).then(result => {
//     three();
// });


// async function main() {
//     console.log('main start');
//     await loadScriptAsync('one.js');
//     one();
//     console.log('main end');
// }


// console.log('Begin');
// main();
// console.log('End');


async function main() {
    await loadScriptAsync('one.js');
    one();
    await loadScriptAsync('two.js');
    two();
    await loadScriptAsync('three.js');
    three();
}


console.log('Begin');
main();
console.log('End');


//Begin => end => main start => main end
//Begin => main start => end => main end



function loadScriptAsync(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = function() {

            console.log("Script loaded");
            resolve(src);
        }

        script.onerror = function() {
            console.log("Script error");
            reject(new Error('Not found!'));
        }

        document.body.append(script);
    })
}
