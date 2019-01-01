require.config({
    baseUrl: '../',
    paths: {
        common: 'js/common',
        jquery: 'libs/jquery/jquery-1.12.4.min',
        template: 'libs/template/template.min',
        echarts: 'libs/echarts/echarts.min',
        fastclick: 'libs/fastclick/fastclick',
        swiper: 'libs/swiper/swiper.min',
        Mock: 'libs/mock/dist/mock-min',
        apiMain: 'js/apiMain',
        Toast: 'js/toast',
        Timer: 'js/timer',
        Plugin: 'js/plugin',
        Host: 'js/host'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    },
    waitSeconds: 10,
    urlArgs: 'v={{version}}'
});