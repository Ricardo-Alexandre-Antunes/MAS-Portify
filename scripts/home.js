new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
});

$(document).ready(function () {
    alert("AAAAAAAAAAAAAAaa");
    var url = "organizations.json";
    $.getJSON(url, function (data) {
    console.log(data)
    alert(data[0].Id);
    alert(data[0].Events);
    alert(data[1].District);
    alert(data[1].Pricholder);
    });
        
});