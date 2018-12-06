require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function LoginPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.btnStart = arguments['btnStart'] ? arguments['btnStart'] : '.btn-start';

        this.constructor();
    };

    LoginPage.prototype.constructor = function () {
        var oUpPath = document.querySelector('.icon-up');
        var length = oUpPath.getTotalLength();
        console.log(length);
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
    }

    new LoginPage();

});
