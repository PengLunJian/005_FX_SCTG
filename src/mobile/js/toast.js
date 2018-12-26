define(['jquery'], function ($) {
    function Toast() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.clazz = arguments['clazz'] ? arguments['clazz'] : '.toast';
        this.selector = arguments['selector'] ? arguments['selector'] : '';
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
        var clazz = this.clazz.substr(1) + ' ' + type.substr(5);
        this.selector = 'toast_' + new Date().getTime();
        this.template = '<div id="' + this.selector + '" class="' + clazz + ' fade">'
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
        if ($(this.clazz)[0]) return;
        var template = this.getTemplate(type, message);
        $('body').append(template);
        setTimeout(function () {
            this.hide();
        }.bind(this), 1500);
        return this;
    };
    /**
     *
     * @returns {Toast}
     */
    Toast.prototype.hide = function () {
        $('#' + this.selector).addClass('hide');
        setTimeout(function () {
            $('#' + this.selector).remove();
        }.bind(this), 300);
        return this;
    };
    /**
     *
     */
    return Toast;
});