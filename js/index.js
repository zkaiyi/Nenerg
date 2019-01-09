$(".c-fl").corner("10px keep");
$(".c-fl-a").corner("10px keep");
$(".right-nav").corner("10px");
$(".c-fl-container-01-fl-list").corner("5px keep");
$(".c-fl-container-01-fr-fl").corner("5px keep");
$(".c-fl-container-01-fr-fl-img").corner("curl 62px keep");
// 点击空压站左边
$(document).on("click",".c-fl-container-01-fl-list",function () {
    if($(this).hasClass("c-fl-container-01-fl-list-a")){
    }else {
        $(this).addClass("c-fl-container-01-fl-list-a").siblings().removeClass("c-fl-container-01-fl-list-a")
    }
})

// 点击切换
$(document).on("click",".right-nav",function () {
    if($(this).hasClass("right-nav-a")){

    }else {
        $(this).addClass("right-nav-a").siblings().removeClass("right-nav-a");
        $(this).children().find(".right-nav-top-img01").addClass("hide");
        $(this).children().find(".right-nav-top-img02").removeClass("hide");
        $(this).siblings().children().find(".right-nav-top-img01").removeClass("hide");
        $(this).siblings().children().find(".right-nav-top-img02").addClass("hide");

        var n_i = $(this).index();
        $(".c-fl-container-0").eq(n_i).removeClass("hide").siblings().addClass("hide");

        if(n_i == "2"){
            setTimeout(function () {
                var myChart = echarts.init(document.getElementById('char01'));
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },

                    legend: {
                        // data:['蒸发量','降水量','平均温度']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            // name: '水量',
                            min: 0,
                            // max: 250,
                            // interval: 50,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        },
                        {
                            type: 'value',
                            // name: '温度',
                            min: 0,
                            // max: 25,
                            // interval: 5,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    series: [
                        {
                            // name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
                        },
                        {
                            // name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
                        },
                        {
                            // name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
                        }
                    ]
                };
                myChart.setOption(option);


                var myChart02 = echarts.init(document.getElementById('char02'));
                option02 = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },

                    legend: {
                        // data:['蒸发量','降水量','平均温度']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['第一季度','第二季度','第三季度','第四季度'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            // name: '水量',
                            min: 0,
                            // max: 250,
                            // interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            // name: '温度',
                            min: 0,
                            // max: 25,
                            // interval: 5,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    series: [
                        {
                            // name:'蒸发量',
                            type:'bar',
                            data:[ 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            // name:'降水量',
                            type:'bar',
                            data:[ 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            // name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[ 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                };
                myChart02.setOption(option02);


                var myChart03 = echarts.init(document.getElementById('char03'));
                option03 = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },

                    legend: {
                        data:['蒸发量','降水量','平均温度']
                    },
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
                            // name: '水量',
                            min: 0,
                            // max: 250,
                            // interval: 50,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        },
                        {
                            type: 'value',
                            // name: '温度',
                            min: 0,
                            // max: 25,
                            // interval: 5,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    series: [
                        {
                            // name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            // name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            // name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                };
                myChart03.setOption(option03);


                var myChart04 = echarts.init(document.getElementById('char04'));

                data = [["2018-06-05",116],["2018-06-06",129],["2018-06-07",135],["2018-06-08",86],["2018-06-09",73],["2018-06-10",85],["2018-06-11",73],["2018-06-12",68],["2018-06-13",92],["2018-06-14",130],["2018-06-15",245],["2018-06-16",139],["2018-06-17",115],["2018-06-18",111],["2018-06-19",309],["2018-06-20",206],["2018-06-21",137],["2018-06-22",128],["2018-06-23",85],["2018-06-24",94],["2018-06-25",71],["2018-06-26",106],["2018-06-27",84],["2018-06-28",93],["2018-06-29",85],["2018-06-30",73],["2018-07-01",83],["2018-07-02",125],["2018-07-03",107],["2018-07-04",82],["2018-07-05",44],["2018-07-06",72],["2018-07-07",106],["2018-07-08",107],["2018-07-09",66],["2018-07-10",91],["2018-07-11",92],["2018-07-12",113],["2018-07-13",107],["2018-07-14",131],["2018-07-15",111],["2018-07-16",64],["2018-07-17",69],["2018-07-18",88],["2018-07-19",77],["2018-07-20",83],["2018-07-21",111],["2018-07-22",57],["2018-07-23",55],["2018-07-24",60]];

                var dateList = data.map(function (item) {
                    return item[0];
                });
                var valueList = data.map(function (item) {
                    return item[1];
                });

                option04 = {

                    // Make gradient line here
                    visualMap: [{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: 400
                    }],


                    title: [{
                        left: 'center',

                    }],
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [{
                        data: dateList
                    }],
                    yAxis: [{
                        splitLine: {show: false}
                    }],

                    series: [{
                        type: 'line',
                        showSymbol: false,
                        data: valueList
                    }]
                };;
                if (option04 && typeof option04 === "object") {
                    myChart04.setOption(option04, true);
                }







            },100)
        }




    }
})
$(document).on("click",".c-fl-container-01-fr-fl",function () {
    window.location.href='detail.html'
})