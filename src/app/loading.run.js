(function () {
    'use strict';

    angular
        .module ('app')
        .run (loading);


    function loading($state, $q, $ionicLoading, Items, Champion, SummonerSpell) {
        $ionicLoading.show();
        $q.all([
            Items.initLoad(),
            Champion.initLoad(),
            SummonerSpell.initLoad()
        ]).then(function(res){
            console.log(res);
            $state.go('search-user');
            $ionicLoading.hide();
        });
    }

} ());