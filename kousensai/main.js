$(".nav-icon").click(function () {
    location.href = $(this).attr("url");
});


$(function () {
    // debug中のみ必要
    // $(".start").remove();
    // $(".main").css("visibility", "visible");

    $(".main").css("visibility", "hidden");
    $("body").css("overflow", "hidden");
    // 時差で発動する
    setTimeout(function () {
        $('button').click();
    }, 2000);
    

    $('#load').on('webkitAnimationEnd', function () {
        $('body').removeAttr('overflow-y');
        $('.start').remove();

        // スクロール無効を解除する
        $(window).off('.noScroll');
        // fire();
        $("body").css("overflow-y", "scroll");
        $(".main").css("visibility", "visible");
    });
});

// 起動ボタンclickされた時の処理
$('.btn-origin').click(function () {
    // スクロールを無効にする
    $(window).on('touchmove.noScroll', function (e) {
        e.preventDefault();
    });
    $(this).toggleClass('fs-power-red');
    $(this).toggleClass('fs-power-white');

    // window.navigator.vibrate(200);
    setTimeout(function () {
        $('#load').toggleClass('loading');
    }, 500);
});


// step2の処理はここから
function step2() { }


// main処理



