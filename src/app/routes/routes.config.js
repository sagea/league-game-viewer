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
            });

            //.state('search-user', {
            //    url: '/search-user',
            //    templateUrl: 'app/routes/search-user/search-user.tpl.html',
            //    controller: 'SearchUserCtrl as SearchCtrl'
            //})
            //.state('game', {
            //    url: '/game',
            //    abstract: true,
            //    templateUrl: 'app/routes/game/game.tpl.html',
            //    controller: function($ionicHistory, $state){
            //        this.searchUser = function(){
            //            $state.go('search-user')
            //        }
            //    },
            //    controllerAs: 'GameAbstractCtrl'
            //})
            //.state('app.list', {
            //    url: '/',
            //    views: {
            //        gameList: {
            //            templateUrl: summonerBase + 'game-list/game-list.tpl.html',
            //            controller: 'GameListCtrl as HomeCtrl'
            //        }
            //    }
            //});

        //$urlRouterProvider.otherwise('/');

    }

}());