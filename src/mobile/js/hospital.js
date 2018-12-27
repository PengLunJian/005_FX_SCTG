require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {
    /**
     *
     * @constructor
     */
    function HospitalPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.swiper = arguments['swiper'] ? arguments['swiper'] : null;
        this.active = arguments['active'] ? arguments['active'] : 'active';
        this.tabItem = arguments['tabItem'] ? arguments['tabItem'] : '.tab-item';
        this.btnSearch = arguments['btnSearch'] ? arguments['btnSearch'] : '.btn-search';
        this.btnCancel = arguments['btnCancel'] ? arguments['btnCancel'] : '.btn-cancel';

        this.constructor();
    };
    /**
     *
     * @returns {HospitalPage}
     */
    HospitalPage.prototype.constructor = function () {
        this.tabChange();
        this.initSwiper();
        this.showModal();
        this.hideModal();
        return this;
    };
    /**
     *
     * @returns {HospitalPage}
     */
    HospitalPage.prototype.tabChange = function () {
        var _this = this;
        $(document).on('click', this.tabItem, function () {
            $(_this.tabItem).not(this).removeClass(_this.active);
            $(this).addClass(_this.active);
            _this.swiper.slideTo($(this).index());
        });
        return this;
    };
    /**
     *
     * @returns {HospitalPage}
     */
    HospitalPage.prototype.initSwiper = function () {
        this.swiper = new swiper('#swiper', {
            autoHeight: true,
            onSlideChangeStart: function () {
                var index = this.swiper.activeIndex;
                $(this.tabItem).removeClass(this.active);
                $(this.tabItem).eq(index).addClass(this.active);
            }.bind(this)
        });
        return this;
    };
    /**
     *
     * @returns {HospitalPage}
     */
    HospitalPage.prototype.showModal = function () {
        $(document).on('click', this.btnSearch, function () {
            $('.modal').removeClass('hide');
        }.bind(this));
        return this;
    };
    /**
     *
     * @returns {HospitalPage}
     */
    HospitalPage.prototype.hideModal = function () {
        $(document).on('click', this.btnCancel, function () {
            $('.modal').addClass('hide');
        }.bind(this));
        return this;
    };
    /**
     *
     */
    new HospitalPage();

});
