
// スクロールを無効にする
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

$(function(){
    // 時差で発動する
    setTimeout(function(){
        $('button').click();
    }, 2000);

    $('#load').on('webkitAnimationEnd', function(){
        $('#load').remove();
        $('button').remove();
        $('body').removeAttr('overflow-y');
        
        // スクロール無効を解除する
        $(window).off('.noScroll');
    });
});

// 起動ボタンclickされた時の処理
$('.btn-origin').click(function(){
    $(this).toggleClass('fs-power-red');
    $(this).toggleClass('fs-power-white');
    
    // window.navigator.vibrate(200);
    setTimeout(function(){
        $('#load').toggleClass('loading');
    }, 500);
});


