new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
});

$.getJSON("organizations.json",
    function (data) {
        var student = '';
        console.log(student)
    })
