
$(function(){
    $(".loading").on('webkitAnimationEnd', function(){
        $(".loading").remove();
    });
});