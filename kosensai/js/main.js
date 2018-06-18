(function (handleload) {
            var xhr = new XMLHttpRequest;
          
            xhr.addEventListener('load', handleload, false);
            xhr.open('GET', 'json/timetable.json', true);
            xhr.send(null);
          }(function handleLoad (event) {
            var xhr = event.target,
                obj = JSON.parse(xhr.responseText);
                console.log(obj.shop);
                initVue(obj);
          }));
          function initVue(info){
    new Vue({
        el: '#app',
        data: {
            infos: info["timetable"]
        }
    });
    new Vue({
        el: '#shop',
        data: {
            shops: info["shop"]
        }
    })
}