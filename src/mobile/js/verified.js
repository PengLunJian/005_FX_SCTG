window.onload = function() {
    initAreal();
};
function initAreal() {
    var area1 = new LArea();
    area1.init({
        'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value1', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    area1.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
}
function startVerified() {
    var name = document.getElementById('name').value;
    var idCardNum = document.getElementById('idCardNum').value;
    var phoneNum = document.getElementById('phoneNum').value;
    var adress = document.getElementById('adress').value;
    if (!name) {
        showToast('请输入姓名');
        return;
    }
    if (!idCardNum) {
        showToast('请输入身份证号码');
        return;
    }
    if (!phoneNum) {
        showToast('请输入电话号码');
        return;
    }
    if (!adress) {
        showToast('请输入现在住址');
        return;
    }
    console.log('准备跳转');
}
function showToast(msg) {
    var toast = document.getElementById('toast');
    toast.style.display = 'block';
    toast.innerHTML = msg;
    setTimeout(function() {
        hideToast(toast);
    }, 1000);
    function hideToast(toast) {
        toast.style.display = 'none';
    }
}
// var app = new Vue({
//     el: '#app',
//     data: {
//         show: false,
//         toastMsg: '',
//         name: '',
//         idCardNum: '',
//         phoneNum: '',
//         region: ['上海市', '上海市', '闵行区'],
//         adress: ''
//     },
//     created() {
//         this.initAreal();
//     },
//     methods: {
//         hideToast: function() {
//             this.show = false;
//             this.toastMsg = '';
//         },
//         showToast: function(msg) {
//             this.show = true;
//             this.toastMsg = msg;
//             setTimeout(function() {
//                 app.hideToast();
//             }, 2000);
//         },
//         initAreal: function() {
//             debugger;
//             var area1 = new LArea();
//             area1.init({
//                 'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
//                 'valueTo': '#value1', //选择完毕后id属性输出到该位置
//                 'keys': {
//                     id: 'id',
//                     name: 'name'
//                 }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
//                 'type': 1, //数据源类型
//                 'data': LAreaData //数据源
//             });
//             area1.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
//             // var area2 = new LArea();
//             // area2.init({
//             //     'trigger': '#demo2',
//             //     'valueTo': '#value2',
//             //     'keys': {
//             //         id: 'value',
//             //         name: 'text'
//             //     },
//             //     'type': 2,
//             //     'data': [provs_data, citys_data, dists_data]
//             // });
//         },
//         startVerified: function() {
//             if (!this.name) {
//                 this.showToast('请输入姓名');
//                 return;
//             }
//             if (!this.idCardNum) {
//                 this.showToast('请输入身份证号码');
//                 return;
//             }
//             if (!this.phoneNum) {
//                 this.showToast('请输入电话号码');
//                 return;
//             }
//             if (!this.adress) {
//                 this.showToast('请输入现在住址');
//                 return;
//             }
//             console.log('准备跳转');
//         }
//     }
// })