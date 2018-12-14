require(['jquery', 'common', 'template', 'fastclick', 'Toast', 'Timer', 'apiMain'], function ($, common, template, fastclick, Toast, Timer, apiMain) {

    function LoginPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.code = arguments['code'] ? arguments['code'] : '#code';
        this.tell = arguments['tell'] ? arguments['tell'] : '#tell';
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

    LoginPage.prototype.checkTellNotEmpty = function () {
        var result = false;
        var toast = new Toast();
        var regExpTell = /^1\d{10}$/;
        var tell = $(this.tell).val().trim();
        if (!tell) {
            toast.show(toast.INFORMATION, '非空输入');
        } else if (!regExpTell.test(tell)) {
            toast.show(toast.WARNING, '输入有误');
        } else {
            result = true;
        }
        toast = null;
        return result;
    };

    LoginPage.prototype.checkCodeNotEmpty = function () {
        var result = false;
        var toast = new Toast();
        var regExpCode = /^\d{4}$/;
        var code = $(this.code).val().trim();
        if (!code) {
            toast.show(toast.INFORMATION, '非空输入');
        } else if (!regExpCode.test(code)) {
            toast.show(toast.WARNING, '输入有误');
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
        $.ajax({
            url: apiMain.getUrl('sendSms'),
            data: apiMain.getParams({
                Value: $(this.tell).val().trim()
            }),
            success: function (data) {
                if (data.code !== this.ERROR_NO) {

                } else {

                }
            }
        });
        return this;
    };

    LoginPage.prototype.exeAjaxRequestCode = function () {
        var _this = this;
        $(document).on('click', this.btnCode, function () {
            if (_this.checkTellNotEmpty()) {
                if (!$(this).hasClass('disabled')) {
                    _this.ajaxRequestCode();
                    new Timer({
                        seconds: 5,
                        selector: _this.btnCode,
                        callback: function () {
                            console.log('倒计时完成');
                        }
                    });
                }
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
            if (_this.checkTellNotEmpty()) {
                if (_this.checkCodeNotEmpty()) {
                    if (_this.ajaxRequestLogin()) {
                        _this.saveToSessionStorage();
                    }
                }
            }
        });
    };

    new LoginPage();

});
