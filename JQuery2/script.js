// $('.cities .header').click(function() {
//     // console.log("Test");
//     // $(this).next().slideToggle();
//     // $(this).nextAll().slideToggle();

//     //  $(this).nextUntil('.header').slideToggle();


//     // $(this).prev().slideToggle();
//     // $(this).prevAll().slideToggle();

//     //$(this).prevUntil('.header').slideToggle();

//     //  $(this).parent().slideToggle();

//     // console.log($(this).parents());
//     // console.log($(this).parentsUntil('body'));

//     // console.log($(this).children());

// //    console.log($('.cities').find('h2'));
// })


// $('.cities .header').click(function() {
//     $('.cities .description').not($(this).next()).slideUp();
//     $('.cities .header').not(this).find('i').removeClass('fa-minus').addClass("fa-plus");


//     $(this).next().slideToggle();
//     $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');


//     // <i class="fa-regular fa-minus"></i>
//     // <i class="fa-regular fa-plus"></i>
// })



// $('#citySearch').submit(function() {
//     // console.log($('#city').val());;

//     let name = $('#city').val();

//     // $('.cities .elem:first')
//     //     .clone(true, true)
//     //     .appendTo(".cities")
//     //     .find('.header p')
//     //     .text(name);

//     let templateHtml = $('#cityElem').html();
//     $('.cities').append(templateHtml);

//     console.log(templateHtml);

//     // $('#cityElem')
//     //     .find('.elem')
//     //     .clone(true, true)
//     //     .appendTo('.cities');


//     event.preventDefault();
// })



function renderCity(data) {

    let templateHtml = $('#cityElem').html();
    let template = Handlebars.compile(templateHtml);
    let result = template(data);
    $('.cities').append(result);
}


$('#citySearch').submit(async function() {
    event.preventDefault();
    let name = $('#city').val();

    try {
        let data = await $.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=82d18c260f5f2d9b4f74e6d383d10282&units=metric`);
        renderCity(data);
        console.log(data);
    } catch (error) {

    }






})



$('.cities').on('click', '.header', function() {
    $('.cities .description').not($(this).next()).slideUp();
    $('.cities .header').not(this).find('i').removeClass('fa-minus').addClass("fa-plus");


    $(this).next().slideToggle();
    $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');
})
