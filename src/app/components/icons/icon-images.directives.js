(function () {
    'use strict';

    angular
        .module('app.icons')
        .directive('championIconId', championIconId)
        .directive('summonerIconId', summonerIconId)
        .directive('itemIconId', itemIconId);


    function championIconId(Champion) {
        return renderIconDirective('championIconId', Champion.getImageUrl);
    }

    function summonerIconId(SummonerSpell) {
        return renderIconDirective('summonerIconId', SummonerSpell.getImageUrl);
    }

    function itemIconId(Items) {
        return renderIconDirective('itemIconId', Items.getImageUrl);
    }


    function renderIconDirective(attr, getIconFn) {
        return {
            restrict: 'A',
            compile: function(cElem){
                cElem.addClass(attr);
                return function link(scope, elem, attrs) {
                    scope.$watch(attrs[attr], function (val) {
                        var src = "";
                        if (angular.isNumber(val)) {
                            var icon = getIconFn(val);
                            src = icon || '';
                            elem.removeClass('empty-src');
                        } else {
                            elem.addClass('empty-src');
                        }
                        elem.attr('src', src);
                    });
                }
            }
        };
    }

}());