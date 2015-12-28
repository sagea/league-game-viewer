(function () {
    'use strict';

    angular
        .module('app.routes')
        .factory('SearchUser', SearchUser);


    function SearchUser(){

        return {
            formatRegions: formatRegions
        };

        function formatRegions(regions){
            var ret = [];
            angular.forEach(regions, function(region){
                ret.push(region.slug);
            });
            return ret;
        }

    }

}());