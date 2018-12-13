define(['jquery'], function ($) {
    function Timer() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.timer = arguments['timer'] ? arguments['timer'] : null;
        this.text = arguments['text'] ? arguments['text'] : '重新获取';
        this.seconds = arguments['seconds'] ? arguments['seconds'] : 60;
        this.callback = arguments['callback'] ? arguments['callback'] : null;
        this.selector = arguments['selector'] ? arguments['selector'] : 'body';
        this.disabled = arguments['disabled'] ? arguments['disabled'] : 'disabled';


        this.constructor();
    }

    /**
     *
     * @returns {Toast}
     */
    Timer.prototype.constructor = function () {
        this.startTimer();
        return this;
    };
    /**
     *
     * @returns {Timer}
     */
    Timer.prototype.startTimer = function () {
        var _this = this;
        $(_this.selector).addClass(_this.disabled);
        $(_this.selector).text(_this.seconds + 's');
        this.timer = setTimeout(function () {
            _this.seconds--;
            $(_this.selector).text(_this.seconds + 's');
            _this.startTimer();
            if (_this.seconds <= 0) {
                $(_this.selector).text(_this.text);
                $(_this.selector).removeClass(_this.disabled);
                if (typeof _this.callback === 'function') {
                    _this.callback();
                }
                clearInterval(_this.timer);
            }
        }, 1000);
        return this;
    };

    return Timer;
});