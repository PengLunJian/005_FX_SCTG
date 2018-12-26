require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function HospitalPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.active = arguments['active'] ? arguments['active'] : 'active';
        this.tabItem = arguments['tabItem'] ? arguments['tabItem'] : '.tab-item';

        this.constructor();
    };

    HospitalPage.prototype.constructor = function () {
        this.tabChange();
        return this;
    };

    HospitalPage.prototype.tabChange = function () {
        var _this = this;
        $(document).on('click', this.tabItem, function () {
            $(_this.tabItem).not(this).removeClass(_this.active);
            $(this).addClass(_this.active);
        });
        return this;
    }

    new HospitalPage();

});
