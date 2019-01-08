require(['jquery', 'common', 'template', 'apiMain'], function ($, common, template, apiMain) {
    /**
     *
     * @constructor
     */
    function InformationPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };
    /**
     *
     * @returns {InformationPage}
     */
    InformationPage.prototype.constructor = function () {
        this.ajaxRequestNewsItems();
        return this;
    };
    /**
     *
     * @returns {InformationPage}
     */
    InformationPage.prototype.ajaxRequestNewsItems = function () {
        common.$ajax({
            url: apiMain.getUrl('selectNewsItems'),
            $renderContainer: $('#tpl_NEWS_ITEMS'),
            success: function (data) {
                data = data || {};
                if (data.success) {
                    if (!common.ajaxDataIsExist(data)) return;
                    var templateHtml = template('tpl-NEWS-ITEM', data);
                    this.$renderContainer.html(templateHtml);
                }
            }
        });
        return this;
    };
    /**
     *
     */
    new InformationPage();

});
