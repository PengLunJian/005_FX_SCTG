require(['jquery', 'common', 'template', 'fastclick', 'Toast', 'Timer'], function ($, common, template, fastclick, Toast, Timer) {

    function LoginPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.phone = arguments['phone'] ? arguments['phone'] : '#phone';
        this.code = arguments['code'] ? arguments['code'] : '#code';
        this.btnCode = arguments['btnCode'] ? arguments['btnCode'] : '.btn-code';
        this.btnStart = arguments['btnStart'] ? arguments['btnStart'] : '.btn-start';
        this.btnLogin = arguments['btnLogin'] ? arguments['btnLogin'] : '.btn-login';

        this.constructor();
    };

    LoginPage.prototype.constructor = function () {
        this.exeAjaxRequestCode();
        this.exeAjaxRequestLogin();
    };

    LoginPage.prototype.startTimer = function () {
        var _this = this;
        var initTime = 10;
        $(document).on('click', this.btnStart, function () {
            window.timer = setInterval(function () {
                if (initTime === 0) {
                    clearInterval(window.timer);
                    return;
                }
                $(_this.btnStart).text('0' + (--initTime));
            }, 1000);
        });
        return this;
    };

    LoginPage.prototype.checkNotEmpty = function () {
        var result = false;
        var toast = new Toast();
        if (!$(this.phone).val().trim()) {
            toast.show(toast.INFORMATION, '非空输入');
        } else if (!$(this.code).val().trim()) {
            toast.show(toast.INFORMATION, '非空输入');
        } else {
            result = true;
        }
        toast = null;
        return result;
    };

    LoginPage.prototype.saveToSessionStorage = function () {
        return this;
    };

    LoginPage.prototype.ajaxRequestCode = function () {
        return this;
    };

    LoginPage.prototype.exeAjaxRequestCode = function () {
        var _this = this;
        var toast = new Toast();
        $(document).on('click', this.btnCode, function () {
            if (!$(_this.phone).val().trim()) {
                toast.show(toast.INFORMATION, '非空输入');
                return;
            }
            if (!$(this).hasClass('disabled')) {
                new Timer({
                    seconds: 5,
                    selector: _this.btnCode,
                    callback: function () {
                    }
                });
            }
        });
        return this;
    };

    LoginPage.prototype.ajaxRequestLogin = function () {
        var result = false;
        return result;
    };

    LoginPage.prototype.exeAjaxRequestLogin = function () {
        var _this = this;
        $(document).on('click', this.btnLogin, function () {
            if (_this.checkNotEmpty()) {
                if (_this.ajaxRequestLogin()) {
                    _this.saveToSessionStorage();
                }
            }
        });
    };

    new LoginPage();

});
