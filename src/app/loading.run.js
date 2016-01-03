(function () {
    'use strict';

    angular
        .module ('app')
        .run (loading);


    function loading($state, $q, $ionicLoading, $rootScope, Summoner, Items, Champion, SummonerSpell) {
        $ionicLoading.show();
        $q.all([
            Items.initLoad(),
            Champion.initLoad(),
            SummonerSpell.initLoad()
        ]).then(function(res){
            $state.go('search-user');
            $ionicLoading.hide();
        });


        var initialLoadWatch = $rootScope.$on('$stateChangeSuccess', function () {
            if (!Summoner.selected) {
                $state.go('loading');
            }
            initialLoadWatch();
        });
    }

} ());