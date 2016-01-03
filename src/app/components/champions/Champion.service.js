(function () {
    'use strict';

    angular
        .module ('app.Champion', ['app.Api'])
        .factory ('Champion', Champion);


    function Champion($q, Api) {
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
            return Api.getChampions({dataById: true, champData: 'all'}).then(function(res){
                list = res.data;
                loaded = true;
                return res;
            }, function(err){
                return $q.reject(err);
            });
        }

        function getInfo(id){
            if(loaded){
                var champion = list[id];
                return champion ? champion: null;
            } else {
                return null;
            }
        }
        function getImageUrl(id){
            var champion = getInfo(id);
            if(champion){
                return 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/' + champion.image.full;
            } else {
                return champion;
            }
        }

    }

} ());