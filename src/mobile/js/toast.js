define(['jquery'], function ($) {
    function Toast() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.domId = arguments['domId'] ? arguments['domId'] : '';
        this.timer = arguments['timer'] ? arguments['timer'] : null;
        this.template = arguments['template'] ? arguments['template'] : '';
        this.ERROR = arguments['ERROR'] ? arguments['ERROR'] : 'icon-error';
        this.WARNING = arguments['template'] ? arguments['template'] : 'icon-warning';
        this.SUCCESS = arguments['template'] ? arguments['template'] : 'icon-success';
        this.INFORMATION = arguments['template'] ? arguments['template'] : 'icon-information';

        this.constructor();
    }

    /**
     *
     * @returns {Toast}
     */
    Toast.prototype.constructor = function () {
        return this;
    };
    /**
     *
     * @returns {string}
     */
    Toast.prototype.getTemplate = function (type, message) {
        var clazz = ' ' + type.substring(5, type.length);
        this.domId = 'toast_' + new Date().getTime();
        this.template = '<div id="' + this.domId + '" class="toast' + clazz + ' hide">'
            + '<div class="toast-inner"><i class="toast-icon ' + type + '"></i>'
            + '<p class="toast-text">' + message + '</p></div></div>';
        return this.template;
    };
    /**
     *
     * @param type
     * @param message
     * @returns {Toast}
     */
    Toast.prototype.show = function (type, message) {
        var _this = this;
        var template = this.getTemplate(type, message);
        $('body').append(template);
        this.timer = setTimeout(function () {
            $('#' + _this.domId).removeClass('hide');
            _this.timer = setTimeout(function () {
                _this.hide();
            }, 1500);
        }, 30);
        return this;
    };
    /**
     *
     * @returns {Toast}
     */
    Toast.prototype.hide = function () {
        $('#' + this.domId).addClass('hide');
        if (this.timer) clearInterval(this.timer);
        this.timer = setTimeout(function () {
            $('#' + this.domId).remove();
        }.bind(this), 300);
        this.timer = null;
        return this;
    };

    return Toast;
});