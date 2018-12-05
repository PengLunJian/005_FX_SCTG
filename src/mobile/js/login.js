require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function LoginPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };

    LoginPage.prototype.constructor = function () {
        var oSvg = document.getElementById('circle');
        console.log(oSvg.getTotalLength());
    };

    new LoginPage();

});
