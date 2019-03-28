// 触发
$(".xl01-list-title").click(function () {
    if($(this).siblings().hasClass("hide")){
        $(this).siblings().slideDown();
        $(this).siblings().removeClass("hide");
        $(this).find(".xl01-list-img").attr("src","img/char/j.png");

    }else {

        $(this).siblings().slideUp();
        $(this).siblings().addClass("hide");
        $(this).find(".xl01-list-img").attr("src","img/char/ji.png");
    }
});
$(".xl01-list02-title").click(function () {
    if($(this).siblings().hasClass("hide")){

        $(this).siblings().slideDown();
        $(this).siblings().removeClass("hide");
        $(this).find(".xl01-list-img").attr("src","img/char/ji.png");


    }else {

        $(this).siblings().slideUp();
        $(this).siblings().addClass("hide");
        $(this).find(".xl01-list-img").attr("src","img/char/j.png");
    }
});

// 多选
$(document).on("click",".cheeck",function () {
    if($(this).hasClass("cheeck-no")){
        $(this).addClass("cheeck-active").removeClass("cheeck-no");
        $(this).find("img").removeClass("hide");
    }else {
        $(this).addClass("cheeck-no").removeClass("cheeck-active");
        $(this).find("img").addClass("hide");
    }
});

// 保存选择
$(document).on("click",".bcxz",function () {
    $(".dbcx-fl-fr").html("");

    var array01 = $(".cheeck-active");
    var array=[];
    if(array01.length == 0){
        alert("请至少选择一个测点！");
    }else{
        for(var i=0;i<array01.length;i++){

            var proname = $(array01[i]).parent().text();
            var html = ' <div class="dbcx-fl-fr-name fl">'+proname+'</div>';
            $(".dbcx-fl-fr").append(html);
        }

    }
});

// 尖峰平谷查询

$(document).on("click",".jfpg-cx",function () {
    var array01 = $(".cheeck-active");
    var array=[];
    if(array01.length == 0){
        alert("请至少选择一个测点！");
    }else{
        for(var i=0;i<array01.length;i++){
            var proname = $(array01[i]).parent().text();
            array.push(JSON.stringify(dataArray))
        }
        sessionStorage.setItem("array",JSON.stringify(array));
    }
});




