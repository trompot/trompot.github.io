
$(function(){
    $('.loading').on('webkitAnimationEnd', function(){
        $('.loading').remove();
    });
});

// powerの色変える
$('button').click(function(){
    $(this).toggleClass('fs-power-red');
    $(this).attr('disabled', true);
    $()
});
