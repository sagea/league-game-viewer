(function () {
    'use strict';

    angular
        .module('app.routes')
        .factory('GameListService', GameListService);


    function GameListService() {

        return {
            formatMatches: formatMatches
        };

        function formatMatches(games) {
            return angular
                .copy(games)
                .map(function (game) {
                    var created = new Date(game.createDate);
                    game.createdFormatted = [
                        created.getMonth(),
                        created.getDate(),
                        created.getFullYear() - 2000
                    ].join(' / ');

                    if(!angular.isNumber(game.stats.championsKilled)){
                        game.stats.championsKilled = 0;
                    }
                    if(!angular.isNumber(game.stats.numDeaths)){
                        game.stats.numDeaths = 0;
                    }
                    if(!angular.isNumber(game.stats.assists)){
                        game.stats.assists = 0;
                    }


                    game.stats.gameLengthMinutes = Math.floor(game.stats.timePlayed / 60);
                    game.stats.kda = Math.floor(game.stats.championsKilled / game.stats.numDeaths * 10) / 10;
                    game.stats.goldEarnedK = Math.floor(game.stats.goldEarned / 100) / 10;
                    return game;
                });
        }

    }
}());