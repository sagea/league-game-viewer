describe('Icon directive ', function () {
    var $compile,
        $rootScope;
    beforeEach(module('app.icons'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

    }));

    describe('itemIconId src url', function(){
        it('should contain a to url if item exists', function(){
            element = $compile('<img item-icon-id="1001"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('img/items/icons/1001.png');
        });
        it('should be empty if item doesn\'t exist', function(){
            element = $compile('<img item-icon-id="9999999"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('');
        });
    });

    describe('championIconId src url', function(){
        it('should contain a to url if item exists', function(){
            element = $compile('<img champion-icon-id="1"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('img/champions/icons/Annie.png');
        });
        it('should be empty if item doesn\'t exist', function(){
            element = $compile('<img champion-icon-id="9999999"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('');
        });
    });

    describe('summonerIconId src url', function(){
        it('should contain a to url if item exists', function(){
            element = $compile('<img summoner-icon-id="1"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('img/summoner-spells/SummonerBoost.png');
        });
        it('should be empty if item doesn\'t exist', function(){
            element = $compile('<img summoner-icon-id="9999999"/>')($rootScope);
            $rootScope.$digest();
            expect(element.attr('src')).toEqual('');
        });
    });

});
