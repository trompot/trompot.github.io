// タイムテーブル
axios.get('../json/timetable.json').then(function (response) {
    initVue(response.data);
}).catch(function (error) {
    console.log(error);
});
         
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