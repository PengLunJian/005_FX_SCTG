define(['jquery'], function ($) {
    var apis = {
        root: 'UserCenter/v1/',
        deviceId: {
            url: 'refresh/did'
        },
        sendSms: {
            url: 'phone/sendSms',
            params: {
                Value: ''
            }
        },
        smsLogin: {
            url: 'login/sms',
            params: {
                SMSVerificationCode: '',
                TraceMark: '活动跟踪码',
                Channel: '手机登录',
                MobilePhone: ''
            }
        },
        getUrl: function (api) {
            return this.root + this[api].url;
        },
        getParams: function () {
            var data = '';
            var args = arguments.length ? arguments[0] : arguments;
            for (var key in args) {
                data += key + '=' + args[key] + '&';
            }
            return data.substring(0, data.length - 1);
        }
    };

    return apis;
});