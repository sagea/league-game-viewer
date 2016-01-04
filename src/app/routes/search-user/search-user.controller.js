(function () {
    'use strict';

    angular
        .module('app.routes')
        .controller('SearchUserCtrl', SearchUserCtrl);


    function SearchUserCtrl($state, Api, Summoner, SearchUser) {
        var vm = this;
        vm.summonerName = angular.copy(Summoner.info.name) || '';
        vm.region = angular.copy(Summoner.info.region) || 'na';
        vm.regionList = [];
        vm.loading = false;
        vm.errorMessage = false;

        vm.loadRegions = loadRegions;
        vm.loadUser = loadUser;

        init();


        function init(){
            vm.loadRegions();
        }

        function loadRegions(){
            Api.getShards({cache: true}).then(function(regions){
                vm.regionList = SearchUser.formatRegions(regions);
            }, function(err){
                console.log('Get Regions error', err);

            })
        }

        function loadUser(){
            vm.loading = true;
            vm.errorMessage = false;
            console.log(vm.region, vm.summonerName);
            Summoner.getSummoner(vm.region, vm.summonerName).then(function(){
                vm.loading = false;
                $state.go('app.gameList')
            }, function(err){
                vm.errorMessage = err.message;
                vm.loading = false;
            })
        }
    }

}());