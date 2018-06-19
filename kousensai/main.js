
$(function(){
    setTimeout(function(){
        $('button').click();
    }, 2000);

    $('#load').on('webkitAnimationEnd', function(){
        $('#load').remove();
        $('button').remove();
    });
});

// 起動ボタンclickされた時の処理
$('.btn-origin').click(function(){
    $(this).toggleClass('fs-power-red');
    $(this).toggleClass('fs-power-white');
    $(this).attr('disabled', true);
    
    // window.navigator.vibrate(200);
    setTimeout(function(){
        $('#load').toggleClass('loading');
    }, 500);
});
