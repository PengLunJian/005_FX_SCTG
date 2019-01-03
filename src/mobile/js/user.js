require(['jquery', 'common', 'template', 'fastclick', 'apiMain'], function ($, common, template, fastclick, apiMain) {
    /**
     *
     * @constructor
     */
    function UserPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };
    /**
     *
     * @returns {UserPage}
     */
    UserPage.prototype.constructor = function () {
        this.exeAjaxRequestDefaultCard();
        return this;
    };
    /**
     *
     * @returns {UserPage}
     */
    UserPage.prototype.ajaxRequestDefaultCard = function () {
        common.$ajax({
            url: apiMain.getUrl('selectDefaultCard'),
            $renderContainer: $('#tpl_LOGIN_CONTAINER'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-LOGIN-SUCCESS', data);
                    this.$renderContainer.html(templateHtml);
                }
            }
        });
        return this;
    };
    /**
     *
     * @returns {UserPage}
     */
    UserPage.prototype.exeAjaxRequestDefaultCard = function () {
        var nickName = localStorage.NickName;
        if (!nickName) {
            var templateHtml = template('tpl-LOGIN-FAILURE');
            $('#tpl_LOGIN_CONTAINER').html(templateHtml);
        } else {
            this.ajaxRequestDefaultCard();
        }
        return this;
    };
    /**
     *
     */
    new UserPage();
});
