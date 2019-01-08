var myChart = echarts.init(document.getElementById('chart01'));
option = {
    title: {
        text: '供力气压'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['供力气压']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['16:16:0','16:17:0','16:18:0','16:19:0','16:20:0','16:21:0','16:22:0','16:23:0','16:24:0','16:25:0','16:26:0','16:27:0','16:28:0','16:29:0']
    },
    yAxis: {
        name : 'MPA'

    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[0.69, 0.71, 0.70, 0.62, 0.76, 0.63, 0.72,0.66, 0.68, 0.675, 0.685, 0.702, 0.710, 0.705]
        },

    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}