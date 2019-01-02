define(['jquery', 'Host'], function ($, Host) {
    var apis = {
        baseUrl: '/',
        deviceId: {
            url: 'UserCenter/v1/refresh/did'
        },
        sendSms: {
            url: 'UserCenter/v1/phone/sendSms',
            params: {
                Value: ''
            }
        },
        smsLogin: {
            url: 'UserCenter/v1/login/sms',
            params: {
                SMSVerificationCode: '',
                TraceMark: '活动跟踪码',
                Channel: '手机登录',
                MobilePhone: ''
            }
        },
        hotHospital: {
            url: 'WenRongBusiness/v1/home/recom/hospital',
            params: {
                pageSize: '5'
            }
        },
        hotDoctor: {
            url: 'WenRongBusiness/v1/home/recom/doctor',
            params: {
                pageSize: '5'
            }
        },
        selectDefaultCard: {
            url: 'PatientCard/v1/patientCard/getDefaultCardDetail'
        },
        getUrl: function (api) {
            var url = Host.HOST_PUB + this.baseUrl;
            return url + this[api].url;
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