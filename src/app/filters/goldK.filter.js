(function () {
    'use strict';

    angular
        .module ('app.filters.goldK', [])
        .filter ('goldK', goldK);


    function goldK() {
        return function (input) {
            return Math.round(input / 1000) + 'K';
        }
    }

} ());