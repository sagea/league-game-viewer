(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(routes);

    function routes($stateProvider, $urlRouterProvider) {

        var summonerBase = 'app/routes/game/';

        $stateProvider
            .state('loading', {
                url: '/',
                template: '<div></div>'
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/routes/app-template.tpl.html'
            })
            .state('app.search-user', {
                url: '/search-user',
                views: {
                    view: {
                        templateUrl: 'app/routes/search-user/search-user.tpl.html',
                        controller: 'SearchUserCtrl as SearchCtrl'
                    }
                }
            })
            .state('app.gameList', {
                url: '/game/',
                views: {
                    view: {
                        templateUrl: summonerBase + 'game-list/game-list.tpl.html',
                        controller: 'GameListCtrl as HomeCtrl'
                    }
                }
            })
            .state('app.game-viewer', {
                url: '/game/:gameId',
                views: {
                    view: {
                        templateUrl: summonerBase + 'game-viewer/game-viewer.tpl.html',
                        controller: 'GameViewerCtrl as GameCtrl'
                    }
                },
                resolve: {
                    gameInfo: function($q, $stateParams, $ionicLoading, Api, Summoner, SelectedGame){
                        $ionicLoading.show();
                        return SelectedGame.getGame($stateParams.gameId);
                    }
                }
            });
    }

}());