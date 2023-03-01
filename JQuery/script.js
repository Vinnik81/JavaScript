// document.querySelector('h1').innerText = "Farid";
// console.log(document.querySelector('h1').innerText);
//=
// $("h1").text("Farid");
// console.log($("h1").text());


// let btn = document.querySelector('h1');
// let btn = $("h1");


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Onload");
// })


// $(document).ready(() => {
//     console.log("Onload");
// })



// let h1s = document.querySelectorAll('h1');
// for (const h1 of h1s) {
//     h1.innerText = 'Farid';
// }


// $("h1").text("Farid");






// $("h1:first-child").text("Farid");

// console.log($('h1:first-child').attr("title"));


// $('h1').attr("title", "Farid");

// console.log($('h1').attr("title"));

// document.querySelector('h1').classList.add("green")




// console.log($('h1').hasClass("green"));





// $('button').on('click', () => {
//    $('h1').toggleClass("green");

//     // if ($('h1').hasClass("green")) {
//     //     $('h1').removeClass("green");
//     // } else {
//     //     $('h1').addClass("green");
//     // } 
// })



// $('input').val('Pawa');

// console.log($('input').val());



// $('button').offset({ left: 200, top: 300 })



// $('button').click(function() {
//     $('h1').addClass("green");

// })


// $('h1').addClass("green");
// $('h1').text("green");
// $('h1').attr("title", "Farid");



// $('h1').addClass("green").text("green").attr("title", "Farid");

// let isClose = false;
// $('button').click(function() {

//     if (isClose) {
//         $('h1').show();
//     } else {
//         $('h1').hide();

//     }

//     isClose = !isClose;

// });


// $('h1').fadeOut(1500);

// $('button').click(function() {
//     // $('h1').toggle(500);

//      //  $('h1').fadeIn(1500);

//     $('h1').fadeToggle(2000);
// });


$('h1').before('<button>Hello</button>');
$('h1').after('<button>Hello</button>');
$('h1').append('<button>Hello</button>');
$('h1').prepend('<button>Hello</button>');