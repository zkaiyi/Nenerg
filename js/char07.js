$(function () {
    var dom = document.getElementById("byzs01");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;


    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [12, 20, 15, 8, 7, 11, 13],
            type: 'bar'
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});

$(function () {
    var dom = document.getElementById("byzs02");
    var myChart02 = echarts.init(dom);
    var app = {};
    option02 = null;


    option02 = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [12, 20, 15, 8, 7, 11, 13],
            type: 'bar'
        }]
    };
    if (option02 && typeof option02 === "object") {
        myChart02.setOption(option02, true);
    }
});


$(function () {
    var dom = document.getElementById("byzs03");
    var myChart03 = echarts.init(dom);
    var app = {};
    option03 = null;


    option03= {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [12, 20, 15, 8, 7, 11, 13],
            type: 'bar'
        }]
    };
    if (option03 && typeof option03 === "object") {
        myChart03.setOption(option03, true);
    }
});


$(function () {
    var dom = document.getElementById("byzs04");
    var myChart04 = echarts.init(dom);
    var app = {};
    option04 = null;


    option04 = {
        // title : {
        //     text: '本月占比',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series : [
            {
                name: '本月占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'第一周'},
                    {value:310, name:'第二周'},
                    {value:234, name:'第三周'},
                    {value:135, name:'第四周'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option04 && typeof option04 === "object") {
        myChart04.setOption(option04, true);
    }
});

$(function () {
    var dom = document.getElementById("byzs05");
    var myChart05 = echarts.init(dom);
    var app = {};
    option05 = null;


    option05 = {
        // title : {
        //     text: '本月占比',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series : [
            {
                name: '本月占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'第一周'},
                    {value:310, name:'第二周'},
                    {value:234, name:'第三周'},
                    {value:135, name:'第四周'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option05 && typeof option05 === "object") {
        myChart05.setOption(option05, true);
    }
});

$(function () {
    var dom = document.getElementById("byzs06");
    var myChart06 = echarts.init(dom);
    var app = {};
    option06 = null;


    option06 = {
        // title : {
        //     text: '本月占比',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series : [
            {
                name: '本月占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'第一周'},
                    {value:310, name:'第二周'},
                    {value:234, name:'第三周'},
                    {value:135, name:'第四周'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option06 && typeof option06 === "object") {
        myChart06.setOption(option06, true);
    }
});



