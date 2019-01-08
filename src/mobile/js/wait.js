require(['jquery'], function ($) {
    /**
     *
     * @constructor
     */
    function WaitPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.selector = arguments['selector'] ? arguments['selector'] : '';

        this.constructor();
    };
    /**
     *
     * @returns {WaitPage}
     */
    WaitPage.prototype.constructor = function () {
        this.goBack();
        return this;
    };
    /**
     *
     * @returns {WaitPage}
     */
    WaitPage.prototype.goBack = function () {
        $(document).on('click', this.selector, function () {
            location.href = sessionStorage.back_url;
        });
        return this;
    }
    /**
     *
     */
    new WaitPage({
        selector: '#body'
    });

});
