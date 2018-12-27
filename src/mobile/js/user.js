require(['jquery', 'common', 'template', 'fastclick', 'swiper'], function ($, common, template, fastclick, swiper) {

    function UserPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };

    UserPage.prototype.constructor = function () {
        this.renderTemplate();
        return this;
    };

    UserPage.prototype.renderTemplate = function () {
        return this;
    };

    new UserPage();

    var name = localStorage.NickName;
    if (!name)
        name = 'µÇÂ¼/×¢²á';
    $('#info_user').text(name);
});
