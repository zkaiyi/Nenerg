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
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                };
                myChart03.setOption(option03);


                var myChart04 = echarts.init(document.getElementById('char04'));
                $.get('js/compatible/aqi-beijing.json', function (data) {
                    myChart04.setOption(option04 = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            data: data.map(function (item) {
                                return item[0];
                            })
                        },
                        yAxis: {
                            splitLine: {
                                show: false
                            }
                        },

                        dataZoom: [{
                            startValue: '2014-06-01'
                        }, {
                            type: 'inside'
                        }],
                        visualMap: {
                            top: 10,
                            right: 10,
                            pieces: [{
                                // gt: 0,
                                // lte: 50,
                                color: '#096'
                            }, {
                                // gt: 50,
                                // lte: 100,
                                color: '#ffde33'
                            }, {
                                // gt: 100,
                                // lte: 150,
                                color: '#ff9933'
                            }, {
                                // gt: 150,
                                // lte: 200,
                                color: '#cc0033'
                            }, {
                                // gt: 200,
                                // lte: 300,
                                // color: '#660099'
                                color: '#cc0033'
                            }, {
                                // gt: 300,
                                // color: '#7e0023'
                                color: '#ff9933'
                            }],
                            outOfRange: {
                                color: '#999'
                            }
                        },
                        series: {
                            name: '能效分析',
                            type: 'line',
                            data: data.map(function (item) {
                                return item[1];
                            }),
                            markLine: {
                                silent: true,
                                data: [{
                                    yAxis: 50
                                }, {
                                    yAxis: 100
                                }, {
                                    yAxis: 150
                                }, {
                                    yAxis: 200
                                }, {
                                    yAxis: 300
                                }]
                            }
                        }
                    });
                });



            },100)
        }




    }
})
$(document).on("click",".c-fl-container-01-fr-fl",function () {
    window.location.href='detail.html'
})