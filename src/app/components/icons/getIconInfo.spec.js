describe('getIconInfo', function () {
    var GetIconInfo;

    beforeEach(module('app.icons'));

    beforeEach(inject(function(_GetIconInfo_){
        GetIconInfo = _GetIconInfo_;
    }));

    it('should return champion icon info', function () {
        expect(GetIconInfo.champion('1').toString()).toEqual('[object Object]');
    });

    it('should return summoner spell info', function () {
        expect(GetIconInfo.summoner('1').toString()).toEqual('[object Object]');
    });

    it('should return item icon info', function () {
        expect(GetIconInfo.item('1001').toString()).toEqual('[object Object]');
    });
});