(function () {
    'use strict';

    angular
        .module('app.Match', ['app.Api'])
        .factory('Match', Match);


    function Match($q, Api) {

        function MatchConstructor(region, matchId){
            this.region = region;
            this.matchId = matchId;
            this.matchInfo = {};
        }

        MatchConstructor.prototype = {
            getMatch: function(includeTimeline){
                var params = {},
                    _self = this;
                if(typeof includeTimeline == 'boolean') params.includeTimeline = includeTimeline;
                return Api.getMatch(this.region, this.matchId, params).then(function(matchInfo){
                    _self.matchInfo = matchInfo;
                }, function(err){
                    return $q.reject(err.message);
                });
            }
        };



        return function(region, info){
            return new MatchConstructor(region, info);
        }
    }

}());