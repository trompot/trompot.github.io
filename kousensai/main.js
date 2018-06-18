
$(function(){
    $('#load').on('webkitAnimationEnd', function(){
        $('#load').remove();
        $('button').remove();
    });
});

// powerの色変える
$('button').click(function(){
    $(this).toggleClass('fs-power-red');
    $(this).toggleClass('fs-power-white');
    $(this).attr('disabled', true);
    $('#load').toggleClass('loading');
}).css('cursor','pointer');
