require(['jquery', 'common', 'template', 'fastclick', 'swiper', 'apiMain', 'Toast'], function ($, common, template, fastclick, swiper, apiMain, Toast) {

    function UserPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };

    UserPage.prototype.constructor = function () {
        this.renderTemplate();
        this.ajaxRequestCode();
        return this;
    };

    UserPage.prototype.renderTemplate = function () {
        return this;
    };

    UserPage.prototype.ajaxRequestCode = function () {
        common.$ajax({
            url: apiMain.getUrl('selectDefaultCard'),
            success: function (data) {
                data = data || {};
                var toast = new Toast();
                if (data.success) {
                    $('#codeImg').src(data.qrcodeUrl);
                    toast.show(toast.SUCCESS, '请求成功');
                } else {
                    $('#codeImg').src('../images/user-nocode@2x.png');
                    toast.show(toast.ERROR, '请求失败');
                }
                toast = null;
            }
        });
        return this;
    };

    new UserPage();

    var name = localStorage.NickName;
    if (!name)
        name = '登录/注册';
    $('#info_user').text(name);
});
