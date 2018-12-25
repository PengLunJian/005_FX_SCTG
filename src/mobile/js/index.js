require(['jquery', 'common', 'template', 'fastclick', 'swiper', 'apiMain'], function ($, common, template, fastclick, swiper, apiMain) {
    /**
     *
     * @constructor
     */
    function HomePage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.swiper = arguments['swiper'] ? arguments['swiper'] : null;

        this.constructor();
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.constructor = function () {
        this.initBannerSwiper();
        this.ajaxRequestHotDoctor();
        this.ajaxRequestHotHospital();
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.initBannerSwiper = function () {
        this.swiper = new swiper('#banner', {
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination'
        });
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.initHospitalSwiper = function () {
        this.swiper = new swiper('#hospital', {
            freeMode: true,
            slidesPerView: 'auto'
        });
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.initDoctorSwiper = function () {
        this.swiper = new swiper('#doctor', {
            freeMode: true,
            slidesPerView: 'auto'
        });
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.ajaxRequestHotHospital = function () {
        var _this = this;
        common.$ajax({
            url: apiMain.getUrl('hotHospital'),
            $renderContainer: $('#tpl_HOT_HOSPITAL'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-HOT-HOSPITAL', data);
                    this.$renderContainer.html(templateHtml);
                    _this.initHospitalSwiper();
                }
            }
        });
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.ajaxRequestHotDoctor = function () {
        var _this = this;
        common.$ajax({
            url: apiMain.getUrl('hotDoctor'),
            $renderContainer: $('#tpl_HOT_DOCTOR'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-HOT-DOCTOR', data);
                    this.$renderContainer.html(templateHtml);
                    _this.initDoctorSwiper();
                }
            }
        });
        return this;
    };

    new HomePage();

});
