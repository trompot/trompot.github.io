$('#effect').on('animationend', function () {
    effect_end('#effect');
    setTimeout(function(){
        effect_start('#effect');
    }, 400);
});
$('#effect2').on('animationend', function () {
    effect_end('#effect2');
    setTimeout(function(){
        effect_start('#effect2');
    }, 400);
});
$('#effect3').on('animationend', function () {
    effect_end('#effect3');
    setTimeout(function(){
        effect_start('#effect3');
    }, 400);
});
$(function(){
    // iOS判定
    const isIOS = /[ \(]iP/.test(navigator.userAgent)
    if (isIOS){
        removeEffect();
    }
    effect_start('#effect');
    setTimeout(function(){
        effect_start('#effect2');
    }, 400);
    setTimeout(function(){
        effect_start('#effect3');
    }, 900);
    // effect_start('#effect3');
    // effect_start();
});

var color = ['red', 'pink', 'orange', 'blue', 'yellowgreen', 'green'];

function effect_start(id_name){
    // 余白の値生成
    var top = getRandomInt(200);
    var left = getRandomInt(600);
    var col = getRandomInt(6);
    var tt = (top-200);
    if (id_name != '#effect'){
        left += 250;
        tt -= 100;
    }
    $(id_name).addClass('effect');
    $(id_name).css('margin-top', tt + 'px');
    $(id_name).css('margin-left', left+'px');
    $(id_name).css('background-color', color[col]);
}
function effect_end(id_name){
    $(id_name).css('margin-top', '');
    $(id_name).css('margin-left', '');
    $(id_name).css('background-color', '');
    $(id_name).removeClass('effect');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function removeEffect(){
    $('#effect').remove();
    $('#effect2').remove();
    $('#effect3').remove();
}