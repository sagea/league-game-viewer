(function () {
    'use strict';

    angular
        .module('app.Summoner', [
            'app.Api'
        ])
        .factory('Summoner', Summoner);


    function Summoner($q, Api) {
        return {
            selected: false,
            info: {},
            setInfo: setInfo,
            getSummoner: getSummoner,
            getMatchList: getMatchList,
            clear: clear
        };

        function setInfo(info) {
            if (angular.isObject(info)) {
                this.selected = true;
                this.info = angular.extend(this.info, info);
            }
        }

        function getSummoner(region, name) {
            var _self = this;
            _self.clear();
            return Api.getSummoner(region, name)
                .then(function (res) {
                    var key = Object.keys(res)[0];
                    var info = res[key];
                    info.region = angular.copy(region);
                    _self.setInfo(info);
                    return angular.copy(_self.info);
                }, function (err) {
                    return $q.reject(err)
                })
        }

        function getMatchList(params) {
            return Api.getRecentSummonerGames(
                this.info.region,
                this.info.id,
                params
            );
        }

        function clear() {
            this.info = {};
            this.selected = false;
        }
    }

}());