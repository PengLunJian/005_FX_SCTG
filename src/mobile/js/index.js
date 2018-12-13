require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function HomePage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.swiper = arguments['swiper'] ? arguments['swiper'] : null;

        this.constructor();
    };

    HomePage.prototype.constructor = function () {
        this.initBannerSwiper();
        this.initHospitalSwiper();
        this.initDoctorSwiper();
    };

    HomePage.prototype.initBannerSwiper = function () {
        this.swiper = new swiper('#banner', {
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination'
        });
        return this;
    };

    HomePage.prototype.initHospitalSwiper = function () {
        this.swiper = new swiper('#hospital', {
            freeMode: true,
            slidesPerView: 'auto'
        });
        return this;
    };

    HomePage.prototype.initDoctorSwiper = function () {
        this.swiper = new swiper('#doctor', {
            freeMode: true,
            slidesPerView: 'auto'
        });
        return this;
    };

    new HomePage();

});
