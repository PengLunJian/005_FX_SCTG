require(['jquery', 'common', 'template', 'fastclick', 'Toast', 'Timer', 'apiMain'], function ($, common, template, fastclick, Toast, Timer, apiMain) {
    /**
     *
     * @constructor
     */
    function LoginPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.code = arguments['code'] ? arguments['code'] : '#code';
        this.tell = arguments['tell'] ? arguments['tell'] : '#tell';
        this.btnCode = arguments['btnCode'] ? arguments['btnCode'] : '.btn-code';
        this.btnStart = arguments['btnStart'] ? arguments['btnStart'] : '.btn-start';
        this.btnLogin = arguments['btnLogin'] ? arguments['btnLogin'] : '.btn-login';

        this.constructor();
    };
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.constructor = function () {
        this.exeAjaxRequestCode();
        this.exeAjaxRequestLogin();
        return this;
    };
    /**
     *
     * @returns {boolean}
     */
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
    /**
     *
     * @returns {boolean}
     */
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
    /**
     *
     * @param pramas
     * @returns {LoginPage}
     */
    LoginPage.prototype.saveToSessionStorage = function (params) {
        var data = params.data || {};
        sessionStorage.setItem('NickName', data.NickName);
        sessionStorage.setItem('PhoneNumber', data.PhoneNumber);
        sessionStorage.setItem('AccessToken', 'Bearer ' + data.AccessToken);
        setTimeout(function () {
            var html = sessionStorage.getItem('html') || '/app/index.html';
            window.location.replace(html);
        }, 1000);
        return this;
    };
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.ajaxRequestCode = function () {
        common.$ajax({
            url: apiMain.getUrl('sendSms'),
            data: apiMain.getParams({
                Value: $(this.tell).val().trim()
            }),
            success: function (data) {
                data = data || {};
                var toast = new Toast();
                if (data.success) {
                    toast.show(toast.SUCCESS, '发送成功');
                } else {
                    toast.show(toast.ERROR, '发送失败');
                }
                toast = null;
            }
        });
        return this;
    };
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.exeAjaxRequestCode = function () {
        var _this = this;
        $(document).on('click', this.btnCode, function () {
            if (_this.checkTellNotEmpty()) {
                if (!$(this).hasClass('disabled')) {
                    _this.ajaxRequestCode();
                    new Timer({
                        seconds: 60,
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
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.ajaxRequestLogin = function () {
        var _this = this;
        common.$ajax({
            url: apiMain.getUrl('smsLogin'),
            data: apiMain.getParams({
                MobilePhone: $(this.tell).val().trim(),
                SMSVerificationCode: $(this.code).val().trim(),
                TraceMark: '活动跟踪码',
                Channel: '手机登录'
            }),
            success: function (data) {
                data = data || {};
                var toast = new Toast();
                if (data.success) {
                    toast.show(toast.SUCCESS, '登录成功');
                    _this.saveToSessionStorage(data);
                } else {
                    toast.show(toast.ERROR, '登录失败');
                }
                toast = null;
            }
        });
        return this;
    };
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.exeAjaxRequestLogin = function () {
        var _this = this;
        $(document).on('click', this.btnLogin, function () {
            if (_this.checkTellNotEmpty()) {
                if (_this.checkCodeNotEmpty()) {
                    _this.ajaxRequestLogin();
                }
            }
        });
        return this;
    };

    new LoginPage();

});
