(function () {
    'use strict';

    angular
        .module ('app.Maps', ['app.Api'])
        .factory ('Maps', Maps);


    function Maps($q, Api) {
        var list = {},
            loaded = false;

        return {
            list: list,
            loaded: loaded,
            initLoad: initLoad,
            getInfo: getInfo,
            getImageUrl: getImageUrl
        };

        function initLoad(){
            return Api.getMaps({
                itemListData: 'all'
            }).then(function(res){
                list = res.data;
                loaded = true;
                return res;
            }, function(err){
                return $q.reject(err);
            })
        }

        function getInfo(id){
            if(loaded){
                var item = list[id];
                return item ? item: null;
            } else {
                return null;
            }
        }
        function getImageUrl(id){
            var item = getInfo(id);
            if(item){
                return 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/item/' + item.image.full;
            } else {
                return item;
            }
        }
    }

} ());