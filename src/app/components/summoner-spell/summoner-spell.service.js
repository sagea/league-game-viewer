(function () {
    'use strict';

    angular
        .module ('app.SummonerSpell', ['app.Api'])
        .factory ('SummonerSpell', SummonerSpell);


    function SummonerSpell($q, Api) {
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
            return Api.getSummonerSpells({dataById: true, spellData: 'all'}).then(function(res){
                list = res.data;
                loaded = true;
                return res;
            }, function(err){
                return $q.reject(err);
            });
        }

        function getInfo(id){
            if(loaded){
                var SummonerSpell = list[id];
                return SummonerSpell ? SummonerSpell: null;
            } else {
                return null;
            }
        }
        function getImageUrl(id){
            var SummonerSpell = getInfo(id);
            if(SummonerSpell){
                return 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/spell/' + SummonerSpell.image.full;
            } else {
                return SummonerSpell;
            }
        }

    }

} ());