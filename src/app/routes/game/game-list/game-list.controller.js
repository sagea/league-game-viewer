(function () {
    'use strict';

    angular
        .module('app.routes')
        .controller('GameListCtrl', GameListCtrl);


    function GameListCtrl(Summoner, GameListService) {
        var vm = this;
        vm.matchList = [];
        vm.errorMessage = '';
        vm.summonerName = Summoner.info.name;

        vm.getMatchList = getMatchList;

        init();


        function init() {
            vm.getMatchList();
        }

        function getMatchList() {
            vm.errorMessage = false;
            Summoner.getMatchList().then(function (res) {
                vm.matchList = GameListService.formatMatches(res.games);
            }, function (err) {
                vm.errorMessage = err.message;
            });
        }
    }

}());