(function () {
    'use strict';

    angular
        .module('app.icons')
        .directive('championIconId', championIconId)
        .directive('summonerIconId', summonerIconId)
        .directive('itemIconId', itemIconId);


    function championIconId(GetIconInfo) {
        return renderIconDirective('championIconId', GetIconInfo.champion)
    }

    function summonerIconId(GetIconInfo) {
        return renderIconDirective('summonerIconId', GetIconInfo.summoner)
    }

    function itemIconId(GetIconInfo) {
        return renderIconDirective('itemIconId', GetIconInfo.item)
    }


    function renderIconDirective(attr, getIconFn) {
        return {
            restrict: 'A',
            link: function link(scope, elem, attrs) {
                scope.$watch(attrs[attr], function (val) {
                    var src = "";
                    if (angular.isNumber(val)) {
                        var icon = getIconFn(val);
                        src = (icon && icon.image) || '';
                    }
                    elem.attr('src', src);
                });
            }
        };
    }

}());