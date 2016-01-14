(function () {
    'use strict';

    angular
        .module('app.Api', [])
        .factory('Api', Api);


    function Api($q, $http) {

        var apiKey = null;
        var initiated = false;
        var baseURL = 'https://na.api.pvp.net/api/lol/';

        return {
            init: init,
            getSummoner: getSummoner,
            getMatchList: getMatchList,
            getMatch: getMatch,
            getItems: getItems,
            getChampions: getChampions,
            getSummonerSpells: getSummonerSpells,
            getRecentSummonerGames: getRecentSummonerGames,
            getMaps: getMaps,
            getShards: getShards
        };


        function init(key) {
            if (key) {
                initiated = true;
                apiKey = key;
            }
        }

        function getSummoner(region, summonerName, options) {
            return get(region + '/v1.4/summoner/by-name/' + summonerName, options).catch(function (err) {
                return generateErrorResponse(err, {
                    404: 'Summoner not found'
                })
            })
        }

        function getMatchList(region, summonerId, params, options) {
            return get(region + '/v2.2/matchlist/by-summoner/' + summonerId, params, options).catch(function (err) {
                return generateErrorResponse(err, {
                    404: 'No games found',
                    422: 'Games unavailable because Summoner hasn\'t been on since 2013.'
                })
            })
        }

        function getMatch(region, matchId, params, options) {
            return get(region + '/v2.2/match/' + matchId, params, options).catch(function (err) {
                return generateErrorResponse(err, {
                    404: 'Match not found'
                });
            })
        }

        function getItems(params, options){
            return get('static-data/na/v1.2/item', params, options).catch(function(err){
                return generateErrorResponse(err, {});
            })
        }

        function getChampions(params, options){
            return get('static-data/na/v1.2/champion', params, options).catch(function(err){
                return generateErrorResponse(err, {})
            })
        }

        function getSummonerSpells(params, options){
            return get('static-data/na/v1.2/summoner-spell', params, options).catch(function(err){
                return generateErrorResponse(err, {})
            });
        }

        function getRecentSummonerGames(region, summonerId, params, options) {
            return get(region + '/v1.3/game/by-summoner/' + summonerId + '/recent', params, options).catch(function (err) {
                return generateErrorResponse(err, {
                    404: 'No games found'
                })
            })
        }

        function getMaps(params, options){
            return get('static-data/na/v1.2/map', params, options).catch(function(err){
                return generateErrorResponse(err, {});
            })
        }

        function getShards(options) {
            return get('http://status.leagueoflegends.com/shards', null, false, options);
        }


        function get(url, params, useBase, options) {
            var base = useBase !== false ? baseURL : '';
            params = angular.isObject(params) ? params : {};
            if (!initiated) {
                throw "Api.init not ran.";
            }

            return $http.get(base + url,
                angular.extend({
                    params: angular.extend({api_key: apiKey}, params)
                }, options || {})
            ).then(function (res) {
                return res.data;
            }, function (err) {
                return $q.reject(err);
            });
        }

        function generateErrorResponse(errResponse, errors) {
            errors = angular.isObject(errors) ? errors : {};
            return $q.reject({
                status: errResponse.status,
                message: errors[errResponse.status] || errResponse.message
            });

        }
    }
}());