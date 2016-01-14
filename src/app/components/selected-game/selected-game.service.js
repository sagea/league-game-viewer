(function () {
    'use strict';

    angular
        .module ('app.SelectedGame', [
            'app.Api',
            'app.Summoner'
        ])
        .factory ('SelectedGame', SelectedGame);


    function SelectedGame($q, Api, Summoner) {
        SelectedGame.info = {};
        SelectedGame.selected = false;
        SelectedGame.getGame = getGame;
        SelectedGame.setGame = setGame;
        SelectedGame.clear = clear;
        return SelectedGame;

        function getGame(gameId) {
            return Api.getMatch (Summoner.info.region, gameId).then (function (res) {
                SelectedGame.setGame (res);
                return res;
            }, function (err) {
                return $q.reject (err);
            });
        }

        function setGame(gameInfo) {
            SelectedGame.info = gameInfo;
            SelectedGame.selected = true;
        }

        function clear() {
            SelectedGame.info = {};
            SelectedGame.selected = false;
        }
    }

} ());