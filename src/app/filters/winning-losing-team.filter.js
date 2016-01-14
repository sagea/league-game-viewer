(function () {
    'use strict';

    angular
        .module ('app.filters.winningLosingTeam', [])
        .filter ('winningLosingTeam', winningLosingTeam);


    function winningLosingTeam() {
        return function (input) {
            return input;
        }
    }

} ());