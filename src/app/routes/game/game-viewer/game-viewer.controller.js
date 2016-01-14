(function () {
    'use strict';

    angular
        .module ('app.routes')
        .controller ('GameViewerCtrl', GameViewerCtrl);


    function GameViewerCtrl($ionicLoading, SelectedGame, GameViewerLib) {
        var vm = this;
        vm.info = SelectedGame.info;
        vm.teams = {};
        vm.teams.info = _.reduce(vm.info.teams, function(obj, team){
            obj[team.teamId] = team;
            return obj;
        }, {});
        vm.teams.players = _.groupBy(vm.info.participants, function(player){
            var teamId = player.teamId;
            return vm.teams.info[teamId].winner ? 'victors': 'losers';
        });

        console.log(vm.teams);
        vm.players = GameViewerLib.processPlayerInfo(vm.info);
        init ();

        function init() {

            $ionicLoading.hide();
        }

    }

} ());