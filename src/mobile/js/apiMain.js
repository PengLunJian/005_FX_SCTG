define(['jquery'], function ($) {
    var apis = {
        root: '/UserCenter/v1/',
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
            // var data = '';
            // for (var key in arguments[0]) {
            //     data += key + '=' + arguments[0][key] + '&';
            // }
            // return data.substring(0, data.length - 1);
            return arguments[0];
        }
    };

    return apis;
});