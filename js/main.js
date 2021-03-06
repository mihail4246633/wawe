$(function() {

    $('.slider__blog-inner').slick({
        dots: true,
        arrows: false
    });

    $('.menu__btn, .menu__list-link').on('click', function() {
        $('.header__top-inner').toggleClass('header__top-inner--active');

    });

    $(".menu__list a, footer a").on("click", function(e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    var mixer = mixitup('.galary__content');

});