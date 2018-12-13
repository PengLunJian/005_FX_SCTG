define(['jquery', 'fastclick', 'Toast'], function ($, fastclick, Toast) {
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
     * @returns {Common}
     */
    Common.prototype.ajaxExtend = function () {
        var _this = this;
        $(document)
            .ajaxSend(function (event, xhr, options) {
                var ajaxBox = options.$renderContainer;
                options.ajaxBox = ajaxBox;
                _this.showLoading(ajaxBox);

                console.log('AJAX_SEND');
            })
            .ajaxSuccess(function (event, xhr, options, data) {
                if (!_this.ajaxDataIsExist(data)) {
                    var ajaxBox = options.ajaxBox;
                    _this.showNoData(ajaxBox);
                }
                console.log('AJAX_SUCCESS');
            })
            .ajaxError(function (event, xhr, options) {
                var ajaxBox = options.ajaxBox;
                _this.hideLoading(ajaxBox);
                var toast = new Toast();
                toast.show(toast.ERROR, '加载失败');
                toast = null;
                console.log('AJAX_ERROR');
            })
            .ajaxComplete(function (event, xhr, options) {
                var ajaxBox = options.ajaxBox;
                _this.hideLoading(ajaxBox);
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
            ERR_NO: 0,
            SUCCESS_NO: 200,
            timeout: 20000,
            type: 'POST',
            dataType: 'JSON',
            processData: false,
            contentType: 'application/x-www-form-urlencoded'
        });
        return this;
    };
    /**
     *
     * @type {Common}
     */
    var common = new Common();
});