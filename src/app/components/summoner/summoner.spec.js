describe('Summoner service', function () {

    var Summoner;

    beforeEach(module('app.Summoner'));

    beforeEach(inject(function(_Summoner_){
        Summoner = _Summoner_;
        Summoner.setInfo({a: 'a'});
    }));

    it('should set summoner info and set selected status', function () {
        expect(Summoner.info).toEqual({a: 'a'});
        expect(Summoner.selected).toEqual(true);
    });

    it('should clear summoner info', function () {
        Summoner.clear();
        expect(Summoner.info).toEqual({});
        expect(Summoner.selected).toEqual(false);

    });
});
