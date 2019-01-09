require(['jquery', 'common'], function ($, common) {
    /**
     *
     * @constructor
     */
    function JumpPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.selector = arguments['selector'] ? arguments['selector'] : '#iframe';

        this.constructor();
    };
    /**
     *
     * @returns {JumpPage}
     */
    JumpPage.prototype.constructor = function () {
        var JUMP_URL = '/index.html/#' + sessionStorage.jump_url;
        $(this.selector).attr('src', JUMP_URL);
        return this;
    };
    /**
     *
     */
    new JumpPage();

});
