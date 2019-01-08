require(['jquery'], function ($) {
    /**
     *
     * @constructor
     */
    function ScannerPage() {
        var arguments = arguments.length ? arguments[0] : arguments;
        this.video = arguments['video'] ? arguments['video'] : $('#video')[0];

        this.constructor();
    };
    /**
     *
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.constructor = function () {
        this.exeScannerFace();
        return this;
    };
    /**
     *
     * @param stream
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.success = function (stream) {
        var CompatibleURL = window.URL || window.webkitURL;
        this.video.src = CompatibleURL.createObjectURL(stream);
        this.video.play();
        return this;
    };
    /**
     *
     * @param error
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.error = function (error) {
        console.log("访问用户媒体设备失败：" + error);
        return this;
    };
    /**
     *
     * @param constrains
     * @param success
     * @param error
     * @returns {ScannerPage}
     */
    ScannerPage.prototype.scannerFace = function (constrains, success, error) {
        if (navigator.mediaDevices) {
            console.log('mediaDevices');
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(constrains)
                    .then(success)
                    .catch(error);
            }
        } else if (navigator.webkitGetUserMedia) {
            console.log('webkitGetUserMedia');
            navigator.webkitGetUserMedia(constrains)
                .then(success)
                .catch(error);
        } else if (navigator.mozGetUserMedia) {
            console.log('mozGetUserMedia');
            navigator.mozGetUserMedia(constrains)
                .then(success)
                .catch(error);
        } else if (navigator.getUserMedia) {
            console.log('getUserMedia');
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
    ScannerPage.prototype.exeScannerFace = function () {
        if (navigator.mediaDevices ||
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia) {
            var constrains = {video: {width: 480, height: 320}};
            this.scannerFace(constrains, this.success, this.error);
        } else {
            console.log("你的浏览器不支持访问用户媒体设备");
        }
        return this;
    };
    /**
     *
     */
    new ScannerPage();

});
