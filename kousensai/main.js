
$(function(){
    $('.loading').on('webkitAnimationEnd', function(){
        // $('.loading').remove();
    });
});

// powerの色変える
$('button').click(function(){
    $(this).toggleClass('fs-power-red');
    $(this).toggleClass('fs-power-white');
    $(this).attr('disabled', true);
}).css('cursor','pointer');
