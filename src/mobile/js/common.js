define(['jquery', 'fastclick', 'Toast', 'Plugin', 'apiMain'], function ($, fastclick, Toast, Plugin, apiMain) {
    /**
     *
     * @constructor
     */
    function Common() {
        var arguments = arguments.length !== 0 ? arguments[0] : arguments;
        this.element = arguments['element'] ? arguments['element'] : 'html';
        this.footer = arguments['footer'] ? arguments['footer'] : '.footer-item';
        this.offsetTime = arguments['offsetTime'] ? arguments['offsetTime'] : 1000;

        this.constructor();
    }

    /**
     *
     * @returns {Common}
     */
    Common.prototype.constructor = function () {
        this.ajaxConfig();
        this.ajaxExtend();
        this.setFontSize();
        this.initFastClick();
        this.clickFooterItem();
        this.exeAjaxRequestDeviceId();
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
                var AccessToken = sessionStorage.getItem('AccessToken');
                xhr.setRequestHeader('Authorization', AccessToken);
                var ajaxBox = options.$renderContainer;
                options.ajaxBox = ajaxBox;

                console.log('AJAX_SEND');
            })
            .ajaxSuccess(function (event, xhr, options, data) {
                setTimeout(function () {
                    plugin.hideLoading();
                    console.log('AJAX_SUCCESS');
                }, _this.offsetTime);
            })
            .ajaxError(function (event, xhr, options) {
                setTimeout(function () {
                    var ajaxBox = options.ajaxBox;
                    var toast = new Toast();
                    toast.show(toast.ERROR, '加载失败');
                    toast = null;
                    console.log('AJAX_ERROR');
                }, _this.offsetTime);
            })
            .ajaxComplete(function (event, xhr, options) {
                setTimeout(function () {
                    plugin.hideLoading();
                    console.log("AJAX_COMPLETE");
                }, _this.offsetTime);
            });
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.ajaxConfig = function () {
        $.ajaxSetup({
            type: 'POST',
            timeout: 5000,
            dataType: 'JSON',
            processData: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.ajaxRequestDeviceId = function () {
        this.$ajax({
            url: apiMain.getUrl('deviceId'),
            success: function (data) {
                data = data || {};
                var toast = new Toast();
                var AccessToken = 'Bearer ' + data.data;
                if (data.success) {
                    toast.show(toast.SUCCESS, '加载成功');
                    sessionStorage.setItem('AccessToken', AccessToken);
                } else {
                    toast.show(toast.ERROR, '加载失败');
                }
                toast = null;
            }
        })
        return this;
    };
    /**
     *
     * @returns {Common}
     */
    Common.prototype.exeAjaxRequestDeviceId = function () {
        var AccessToken = sessionStorage.getItem('AccessToken');
        if (!AccessToken) {
            this.ajaxRequestDeviceId();
        }
        return this;
    };
    /**
     *
     * @param params
     * @returns {Common}
     */
    Common.prototype.$ajax = function (params) {
        var _this = this;
        $.ajax({
            url: params.url,
            data: params.data,
            success: function (data) {
                setTimeout(function () {
                    params.success(data);
                }, _this.offsetTime);
            }
        })
        return this;
    };

    return new Common();
});