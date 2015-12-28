(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(routes);

    function routes($stateProvider, $urlRouterProvider) {

        var summonerBase = 'app/routes/game/';

        $stateProvider
            .state('search-user', {
                url: '/',
                templateUrl: 'app/routes/search-user/search-user.tpl.html',
                controller: 'SearchUserCtrl as SearchCtrl'
            })
            .state('game', {
                url: '/game',
                abstract: true,
                templateUrl: 'app/routes/game/game.tpl.html',
                controller: function($ionicHistory, $state){
                    this.searchUser = function(){
                        $state.go('search-user')
                    }
                },
                controllerAs: 'GameAbstractCtrl'
            })
            .state('game.list', {
                url: '/',
                views: {
                    gameList: {
                        templateUrl: summonerBase + 'game-list/game-list.tpl.html',
                        controller: 'GameListCtrl as HomeCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    }

}());