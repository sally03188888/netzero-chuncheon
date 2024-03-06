$(document).ready(function () {
    // 메뉴 작업
    $(".gallery>div>a>img").on("mouseover", function () {
        $(".gallery>span>ul>a>li").stop().slideDown(800);
    });

    $(".gallery>div>a>img").on("mouseleave", function () {
        $(".gallery>span>ul>a>li").stop().slideUp(800);
    });
    // 이미지슬라이드작업
    var imgs = 4;
    var now = 0;
    start();

    function start(){
        $(".imgslide>a").eq(0).siblings().fadeOut("slow");
        setInterval(function(){slide()},3000);
    }

    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).fadeOut("slow");
        $(".imgslide>a").eq(now).fadeIn("slow");
    }
    // 모달작업(팝업창)
$(".subnotice h5:first").on("click",function(){
    $("#modal").addClass("active");

});
$(".btn").on("click",function(){
    $("#modal").removeClass("active");
});
});