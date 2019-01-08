// 饼图
$(function () {
    var dom = document.getElementById("bt");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '环形图';

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['1','2','3','4','5']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'1'},
                    {value:310, name:'2'},
                    {value:234, name:'3'},
                    {value:135, name:'4'},
                    {value:1548, name:'5'}
                ]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});
// 折现图
$(function () {
    var dom = document.getElementById("zxt");
    var myChart01 = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '折柱混合';

    option01 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                // dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        // legend: {
        //     data:['客户共区域用电','生产区域用电','平均用水量']
        // },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '电量/kwh',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '平均电量/kwh',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'客户共区域用电',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'生产区域用电',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均用水量',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.4, 5.3, 30.6, 25.0,86.3,154.6,183.6,60.1,32.0,14.0,7.5]
            }
        ]
    };
    ;
    if (option01 && typeof option01 === "object") {
        myChart01.setOption(option01, true);
    }
});