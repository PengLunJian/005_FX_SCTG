define(['jquery'], function ($) {
    /**
     *
     * @constructor
     */
    function Plugin() {
        var args = arguments.length ? arguments[0] : arguments;
        this.loadingTimer = args['loadingTimer'] ? args['loadingTimer'] : null;
        this.loadingSelector = args['loadingSelector'] ? args['loadingSelector'] : '.loading';
        this.loadingContainer = args['loadingContainer'] ? args['loadingContainer'] : $('body');
        this.loadingTemplate = args['loadingTemplate'] ? args['loadingTemplate'] :
            '<div class="loading hide"><div class="loading-bg"></div><div class="loading-inner">' +
            '<div class="loading-icon"></div><div class="loading-text">加载中...</div></div></div>';

        this.errorTimer = args['errorTimer'] ? args['errorTimer'] : null;
        this.errorSelector = args['errorSelector'] ? args['errorSelector'] : 'error';
        this.errorContainer = args['errorContainer'] ? args['errorContainer'] : $('body');
        this.errorTemplate = args['errorTemplate'] ? args['errorTemplate'] :
            '<div class="error hide"><div class="error-inner"><div class="error-icon"></div>' +
            '<div class="btn-refresh">重新加载</div></div></div>';

        this.emptyTimer = args['emptyTimer'] ? args['emptyTimer'] : null;
        this.emptySelector = args['emptySelector'] ? args['emptySelector'] : 'empty';
        this.emptyContainer = args['emptyContainer'] ? args['emptyContainer'] : $('body');
        this.emptyTemplate = args['emptyTemplate'] ? args['emptyTemplate'] :
            '<div class="empty hide"><div class="empty-inner"><div class="empty-icon"></div>' +
            '<div class="empty-text">暂无数据</div></div></div>';

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
    Plugin.prototype.showLoading = function () {
        var _this = this;
        if ($(_this.loadingSelector)[0]) return;
        this.loadingContainer.append(this.loadingTemplate);
        this.loadingTimer = setTimeout(function () {
            $(_this.loadingSelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideLoading = function () {
        var _this = this;
        $(this.loadingSelector).addClass('hide');
        this.loadingTimer = setTimeout(function () {
            $(_this.loadingSelector).remove();
        }, 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showError = function () {
        var _this = this;
        this.errorContainer.append(this.errorTemplate);
        this.errorTimer = setTimeout(function () {
            $(_this.errorSelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideError = function () {
        var _this = this;
        $(this.errorSelector).addClass('hide');
        this.errorTimer = setTimeout(function () {
            $(_this.errorSelector).remove();
        }, 300);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.showEmpty = function () {
        var _this = this;
        this.emptyContainer.append(this.emptyTemplate);
        this.emptyTimer = setTimeout(function () {
            $(_this.emptySelector).removeClass('hide');
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Plugin}
     */
    Plugin.prototype.hideEmpty = function () {
        var _this = this;
        $(this.emptySelector).addClass('hide');
        this.emptyTimer = setTimeout(function () {
            $(_this.emptySelector).remove();
        }, 300);
        return this;
    };

    return Plugin;
});