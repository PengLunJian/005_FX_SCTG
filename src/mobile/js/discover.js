require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function DiscoverPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.swiper = arguments['swiper'] ? arguments['swiper'] : null;

        this.constructor();
    };

    DiscoverPage.prototype.constructor = function () {
        this.initSwiper();
    };

    DiscoverPage.prototype.initSwiper = function () {
        this.swiper = new swiper('.swiper-container', {
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination'
        })
    };

    new DiscoverPage();

});
