define(['jquery'], function ($) {
    /**
     *
     * @constructor
     */
    function Plugin() {
        var args = arguments.length ? arguments[0] : arguments;
        this.bgLoadingSelector = args['bgLoadingSelector'] ? args['bgLoadingSelector'] : '.loading.big';
        this.bgLoadingContainer = args['bgLoadingContainer'] ? args['bgLoadingContainer'] : $('body');
        this.bgLoadingTemplate = args['bgLoadingTemplate'] ? args['bgLoadingTemplate'] :
            '<div class="loading big fade"><div class="loading-bg"></div><div class="loading-inner">' +
            '<div class="loading-icon"></div><div class="loading-text">加载中...</div></div></div>';

        this.smLoadingSelector = args['smLoadingSelector'] ? args['smLoadingSelector'] : '.loading.small';
        this.smLoadingContainer = args['smLoadingContainer'] ? args['smLoadingContainer'] : $('body');
        this.smLoadingTemplate = args['smLoadingTemplate'] ? args['smLoadingTemplate'] :
            '<div class="loading small fade"><div class="loading-inner">' +
            '<div class="loading-icon"></div></div></div>';

        this.btnRefresh = args['btnRefresh'] ? args['btnRefresh'] : '.btn-refresh';
        this.errorSelector = args['errorSelector'] ? args['errorSelector'] : '.error';
        this.errorContainer = args['errorContainer'] ? args['errorContainer'] : $('body');
        this.errorTemplate = args['errorTemplate'] ? args['errorTemplate'] :
            '<div class="error fade"><div class="error-inner"><div class="error-icon ' +
            'icon-failure"></div><div class="btn btn-refresh">重新加载</div></div></div>';

        this.emptySelector = args['emptySelector'] ? args['emptySelector'] : '.empty';
        this.emptyContainer = args['emptyContainer'] ? args['emptyContainer'] : $('body');
        this.emptyTemplate = args['emptyTemplate'] ? args['emptyTemplate'] :
            '<div class="empty fade"><div class="empty-inner"><div class="empty-icon ' +
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
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideBigLoading = function () {
        $(this.bgLoadingSelector).addClass('hide');
        setTimeout(function () {
            $(this.bgLoadingSelector).remove();
        }.bind(this), 300);
        return this;
    };
    /**
     *
     * @returns {*}
     */
    Plugin.prototype.showSmallLoading = function ($ajaxBox) {
        if ($ajaxBox.find(this.errorSelector)[0]) {
            this.hideError($ajaxBox);
        }
        $ajaxBox.html(this.smLoadingTemplate);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideSmallLoading = function ($ajaxBox) {
        $ajaxBox.find(this.smLoadingSelector).addClass('hide');
        setTimeout(function () {
            $ajaxBox.find(this.smLoadingSelector).remove();
        }.bind(this), 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showError = function ($ajaxBox, options) {
        $ajaxBox.html(this.errorTemplate);
        var btnRefresh = $ajaxBox.find(this.btnRefresh);
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
        $ajaxBox.find(this.errorSelector).addClass('hide');
        setTimeout(function () {
            $ajaxBox.find(_this.errorSelector).remove();
        }.bind(this), 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showEmpty = function ($ajaxBox) {
        $ajaxBox.html(this.emptyTemplate);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideEmpty = function ($ajaxBox) {
        $ajaxBox.find(this.emptySelector).addClass('hide');
        setTimeout(function () {
            $ajaxBox.find(this.emptySelector).remove();
        }.bind(this), 300);
        return this;
    };

    return Plugin;
});