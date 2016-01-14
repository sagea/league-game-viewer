(function () {
    'use strict';

    angular
        .module ('app.routes')
        .factory ('GameViewerLib', GameViewerLib);


    function GameViewerLib(Api, Summoner) {
        return {
            getGame: getGame,
            processPlayerInfo: processPlayerInfo
        };

        function getGame(gameId){
            return Api.getMatch(Summoner.info.region, gameId);
        }
        function processPlayerInfo(gameInfo){
            var identities = {};
            _.each(gameInfo.participantIdentities, function(participant){
                identities[participant.participantId] = participant.player;
            });
            return _.map(gameInfo.participants, function(player){
                player.player = identities[player.participantId];
                return player;
            });
        }
    }

} ());