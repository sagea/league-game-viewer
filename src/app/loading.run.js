(function () {
    'use strict';

    angular
        .module ('app')
        .run (loading);


    function loading($state, $q, $ionicLoading, $rootScope, Summoner, Items, Champion, SummonerSpell, Maps) {

        $state.go('loading');

        $ionicLoading.show();
        $q.all([
            Items.initLoad(),
            Champion.initLoad(),
            SummonerSpell.initLoad(),
            Maps.initLoad()
        ]).then(function(res){
            console.log(res);
            $state.go('app.search-user');
            $ionicLoading.hide();
        });
    }

} ());