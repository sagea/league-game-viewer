(function () {
    'use strict';

    angular
        .module('app.routes')
        .controller('GameListCtrl', GameListCtrl);


    function GameListCtrl($state, Summoner, GameListService) {
        var vm = this;
        vm.matchList = [];
        vm.errorMessage = '';
        vm.summonerName = Summoner.info.name;

        vm.getMatchList = getMatchList;
        vm.viewGame = viewGame;
        init();


        function init() {
            vm.getMatchList();
        }

        function viewGame(gameId){
            $state.go('app.game-viewer', {gameId:gameId});
        }

        function getMatchList() {
            vm.errorMessage = false;
            Summoner.getMatchList().then(function (res) {
                console.log('Game List', res);
                vm.matchList = GameListService.formatMatches(res.games);
            }, function (err) {
                vm.errorMessage = err.message;
            });
        }
    }

}());