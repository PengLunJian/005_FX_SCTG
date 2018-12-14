define(['jquery', 'fastclick', 'Toast', 'Plugin'], function ($, fastclick, Toast, Plugin) {
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
        this.ajaxExtend();
        this.ajaxInitDefault();
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
     * @returns {Common}
     */
    Common.prototype.ajaxExtend = function () {
        var _this = this;
        var plugin = new Plugin();
        $(document)
            .ajaxSend(function (event, xhr, options) {
                plugin.showLoading();
                var ajaxBox = options.$renderContainer;
                options.ajaxBox = ajaxBox;

                console.log('AJAX_SEND');
            })
            .ajaxSuccess(function (event, xhr, options, data) {
                if (!_this.ajaxDataIsExist(data)) {
                    var ajaxBox = options.ajaxBox;
                }
                console.log('AJAX_SUCCESS');
            })
            .ajaxError(function (event, xhr, options) {
                var ajaxBox = options.ajaxBox;
                var toast = new Toast();
                toast.show(toast.ERROR, '加载失败');
                toast = null;
                console.log('AJAX_ERROR');
            })
            .ajaxComplete(function (event, xhr, options) {
                setTimeout(function () {
                    plugin.hideLoading();
                }, 300);
                console.log("AJAX_COMPLETE");
            });
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.ajaxInitDefault = function () {
        $.ajaxSetup({
            ERROR_NO: 0,
            SUCCESS_NO: 200,
            type: 'POST',
            timeout: 20000,
            dataType: 'JSON',
            processData: true,
            contentType: 'application/json'
        });
        return this;
    };
    /**
     *
     * @type {Common}
     */
    var common = new Common();
});