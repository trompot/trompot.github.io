// タイムテーブル
axios.get('http://localhost:8080/json/timetable.json').then(function (response) {
    initVue(response.data);
}).catch(function (error) {
    console.log(error);
});
         
function initVue(info){
    new Vue({
        el: '#app',
        data: {
            infos: info["http://uedayou.net/loa/東京都千代田区永田町一丁目7"]
        }
    })
}