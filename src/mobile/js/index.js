require(['jquery', 'common', 'template', 'swiper', 'apiMain'], function ($, common, template, swiper, apiMain) {
    /**
     *
     * @constructor
     */
    function HomePage() {
        var arguments = arguments.length ? arguments[0] : arguments;

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
        new swiper('#banner', {
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
    HomePage.prototype.ajaxRequestHotHospital = function () {
        common.$ajax({
            url: apiMain.getUrl('hotHospital'),
            $renderContainer: $('#tpl_HOT_HOSPITAL'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-HOT-HOSPITAL', data);
                    this.$renderContainer.html(templateHtml);
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
        common.$ajax({
            url: apiMain.getUrl('hotDoctor'),
            $renderContainer: $('#tpl_HOT_DOCTOR'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-HOT-DOCTOR', data);
                    this.$renderContainer.html(templateHtml);
                }
            }
        });
        return this;
    };
    /**
     *
     */
    new HomePage();

});
