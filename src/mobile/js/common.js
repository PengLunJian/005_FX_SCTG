define(['jquery', 'fastclick'], function ($, fastclick) {
    /**
     *
     * @constructor
     */
    function Common() {
        var arguments = arguments.length !== 0 ? arguments[0] : arguments;
        this.element = arguments['element'] ? arguments['element'] : 'html';
        this.footer = arguments['footer'] ? arguments['footer'] : '.footer-item';

        this.constructor();
    }

    /**
     *
     * @returns {Common}
     */
    Common.prototype.constructor = function () {
        this.setFontSize();
        this.initFastClick();
        this.clickFooterItem();
        return this;
    }
    /**
     *
     * @returns {Common}
     */
    Common.prototype.setFontSize = function () {
        var _this = this;
        var iFontSize = $(window).width() / 3.75 + 'px';
        $(_this.element).css('fontSize', iFontSize);
        $(window).resize(function () {
            var iFontSize = $(window).width() / 3.75 + 'px';
            $(_this.element).css('fontSize', iFontSize);
        });
        document.body.addEventListener('touchstart', function () {
        });
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.initFastClick = function () {
        fastclick.attach(document.body);
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.clickFooterItem = function () {
        $(document).on('click', this.footer, function () {
            var url = $(this).find('a').data('url');
            window.location.replace(url);
        });
        return this;
    };
    /**
     *
     * @type {Common}
     */
    var common = new Common();
});