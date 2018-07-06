$(".nav-icon").click(function () {
    location.href = $(this).attr("url");
});

$("body").css("overflow-y", "scroll");

$(".nav-menu-icon").click(function () {
    $(".nav-menu-icon").toggleClass("nav-menu-icon-after");
    $(".nav-icon-view").toggleClass("nav-icon-view-off");
    $("#nav").toggleClass("fa-times");
    $("#nav").toggleClass("fa-bars");
});
$(function () {
    // menu nav関連処理
    // $(".nav-menu-icon").on('click mouseenter', function () {
    //     $(".nav-icon").remove();
    // });
    
});
// $('.nav-icon').click(function(){
//     alert('アホが見る');
// });

// スクロールを無効にする
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

// スクロール無効を解除する
$(window).off('.noScroll');


// // iOS判定
// const isIOS = /[ \(]iP/.test(navigator.userAgent)
// if (isIOS){
//     alert('hoge');
// }