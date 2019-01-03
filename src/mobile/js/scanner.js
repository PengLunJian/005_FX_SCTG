require(['jquery', 'common', 'template'], function ($, common, template) {

    function ScannerPage() {
        var arguments = arguments.length ? arguments[0] : arguments;

        this.constructor();
    };
    /**
     *
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.constructor = function () {
        this.exeGetUserMedia();
        return this;
    };
    /**
     *
     * @param stream
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.success = function (stream) {
        var video = document.getElementById("video");
        //兼容webkit内核浏览器
        var CompatibleURL = window.URL || window.webkitURL;
        //将视频流设置为video元素的源
        video.src = CompatibleURL.createObjectURL(stream);
        //播放视频
        video.play();
        return this;
    };
    /**
     *
     * @param error
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.error = function (error) {
        alert("访问用户媒体设备失败：", error.name, error.message);
        return this;
    };
    /**
     *
     * @param constrains
     * @param success
     * @param error
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.getUserMedia = function (constrains, success, error) {
        if (navigator.mediaDevices.getUserMedia) {
            //最新标准API
            navigator.mediaDevices.getUserMedia(constrains)
                .then(success)
                .catch(error);
        } else if (navigator.webkitGetUserMedia) {
            //webkit内核浏览器
            navigator.webkitGetUserMedia(constrains)
                .then(success)
                .catch(error);
        } else if (navigator.mozGetUserMedia) {
            //Firefox浏览器
            navigator.mozGetUserMedia(constrains)
                .then(success)
                .catch(error);
        } else if (navigator.getUserMedia) {
            //旧版API
            navigator.getUserMedia(constrains)
                .then(success)
                .catch(error);
        }
        return this;
    };
    /**
     *
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.exeGetUserMedia = function () {
        var _this = this;

        if (navigator.mediaDevices ||
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia) {
            //调用用户媒体设备，访问摄像头
            _this.getUserMedia({
                video: {width: 480, height: 320}
            }, _this.success, _this.error);
        } else {
            alert("你的浏览器不支持访问用户媒体设备");
        }
        return this;
    };
    /**
     *
     */
    new ScannerPage();

});
