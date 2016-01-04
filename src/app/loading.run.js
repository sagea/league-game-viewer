(function () {
    'use strict';

    angular
        .module ('app')
        .run (loading);


    function loading($state, $q, $ionicLoading, $rootScope, Summoner, Items, Champion, SummonerSpell) {

        $state.go('loading');

        $ionicLoading.show();
        $q.all([
            Items.initLoad(),
            Champion.initLoad(),
            SummonerSpell.initLoad()
        ]).then(function(res){
            $state.go('app.search-user');
            $ionicLoading.hide();
        });
    }

} ());