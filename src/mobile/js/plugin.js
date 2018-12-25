define(['jquery'], function ($) {
    /**
     *
     * @constructor
     */
    function Plugin() {
        var args = arguments.length ? arguments[0] : arguments;
        this.bgLoadingTimer = args['bgLoadingTimer'] ? args['bgLoadingTimer'] : null;
        this.bgLoadingSelector = args['bgLoadingSelector'] ? args['bgLoadingSelector'] : '.bgLoading';
        this.bgLoadingContainer = args['bgLoadingContainer'] ? args['bgLoadingContainer'] : $('body');
        this.bgLoadingTemplate = args['bgLoadingTemplate'] ? args['bgLoadingTemplate'] :
            '<div class="bgLoading hide"><div class="bgLoading-bg"></div><div class="bgLoading-inner">' +
            '<div class="bgLoading-icon"></div><div class="bgLoading-text">加载中...</div></div></div>';

        this.smLoadingTimer = args['smLoadingTimer'] ? args['smLoadingTimer'] : null;
        this.smLoadingSelector = args['smLoadingSelector'] ? args['smLoadingSelector'] : '.smLoading';
        this.smLoadingContainer = args['smLoadingContainer'] ? args['smLoadingContainer'] : $('body');
        this.smLoadingTemplate = args['smLoadingTemplate'] ? args['smLoadingTemplate'] :
            '<div class="smLoading hide"><div class="smLoading-inner">' +
            '<div class="smLoading-icon"></div></div></div>';

        this.errorTimer = args['errorTimer'] ? args['errorTimer'] : null;
        this.btnRefresh = args['btnRefresh'] ? args['btnRefresh'] : '.btn-refresh';
        this.errorSelector = args['errorSelector'] ? args['errorSelector'] : '.error';
        this.errorContainer = args['errorContainer'] ? args['errorContainer'] : $('body');
        this.errorTemplate = args['errorTemplate'] ? args['errorTemplate'] :
            '<div class="error hide"><div class="error-inner"><div class="error-icon ' +
            'icon-failure"></div><div class="btn btn-refresh">重新加载</div></div></div>';

        this.emptyTimer = args['emptyTimer'] ? args['emptyTimer'] : null;
        this.emptySelector = args['emptySelector'] ? args['emptySelector'] : '.empty';
        this.emptyContainer = args['emptyContainer'] ? args['emptyContainer'] : $('body');
        this.emptyTemplate = args['emptyTemplate'] ? args['emptyTemplate'] :
            '<div class="empty hide"><div class="empty-inner"><div class="empty-icon ' +
            'icon-empty"></div><div class="empty-text">暂无数据</div></div></div>';

        this.constructor();
    }

    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.constructor = function () {
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showBigLoading = function () {
        var _this = this;
        if ($(_this.bgLoadingSelector)[0]) return;
        this.bgLoadingContainer.append(this.bgLoadingTemplate);
        this.bgLoadingTimer = setTimeout(function () {
            $(_this.bgLoadingSelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideBigLoading = function () {
        var _this = this;
        $(this.bgLoadingSelector).addClass('hide');
        this.bgLoadingTimer = setTimeout(function () {
            $(_this.bgLoadingSelector).remove();
        }, 300);
        return this;
    };
    /**
     *
     * @returns {*}
     */
    Plugin.prototype.showSmallLoading = function ($ajaxBox) {
        var _this = this;
        if ($ajaxBox.find(this.errorSelector)[0]) {
            this.hideError($ajaxBox);
        }
        $ajaxBox.html(this.smLoadingTemplate);
        this.smLoadingTimer = setTimeout(function () {
            $ajaxBox.find(_this.smLoadingSelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideSmallLoading = function ($ajaxBox) {
        var _this = this;
        $ajaxBox.find(this.smLoadingSelector).addClass('hide');
        this.smLoadingTimer = setTimeout(function () {
            $ajaxBox.find(_this.smLoadingSelector).remove('hide');
        }, 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showError = function ($ajaxBox, options) {
        var _this = this;
        $ajaxBox.html(this.errorTemplate);
        this.errorTimer = setTimeout(function () {
            $ajaxBox.find(_this.errorSelector).removeClass('hide');
        }, 30);
        var btnRefresh = $ajaxBox.find(_this.btnRefresh);
        btnRefresh.on('click', function () {
            $.ajax(options);
        });
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideError = function ($ajaxBox) {
        var _this = this;
        $ajaxBox.find(this.errorSelector).addClass('hide');
        this.errorTimer = setTimeout(function () {
            $ajaxBox.find(_this.errorSelector).remove();
        }, 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showEmpty = function ($ajaxBox) {
        var _this = this;
        $ajaxBox.html(this.emptyTemplate);
        this.emptyTimer = setTimeout(function () {
            $ajaxBox.find(_this.emptySelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideEmpty = function ($ajaxBox) {
        var _this = this;
        $ajaxBox.find(this.emptySelector).addClass('hide');
        this.emptyTimer = setTimeout(function () {
            $ajaxBox.find(_this.emptySelector).remove();
        }, 300);
        return this;
    };

    return Plugin;
});