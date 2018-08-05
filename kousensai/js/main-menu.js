$(".nav-icon").click(function () {
    location.href = $(this).attr("url");
});

// $("body").css("overflow-y", "scroll");

$(".nav-menu-icon").click(function () {
    $(".nav-menu-icon").toggleClass("nav-menu-icon-after");
    $(".nav-icon-view").toggleClass("nav-icon-view-off");
    $("#nav").toggleClass("fa-times");
    $("#nav").toggleClass("fa-bars");
});
// var i=0;
// $(function () {
//     // menu nav関連処理
//     // $(".nav-menu-icon").on('click mouseenter', function () {
//     //     $(".nav-icon").remove();
//     // });
    
//     setInterval(load, 50);

// });
// function load(){
//     if(i < 101){
//     console.log(i)
//     $('#okokok').css({'width': i+'%'});
//     i += 1;
//     }
// }
// $(function () {
//     $.scrollify({
//         section: ".page"
//     });
// });
// $('.nav-icon').click(function(){
//     alert('アホが見る');
// });

// // スクロールを無効にする
// $(window).on('touchmove.noScroll', function(e) {
//     e.preventDefault();
// });

// スクロール無効を解除する
// $(window).off('.noScroll');


// hover検出
// $('.icon-text').css();