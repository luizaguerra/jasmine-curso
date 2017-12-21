describe("Comparador toBeFalsy", function(){
    it("Deve validar o uso do toBeFalsy", function(){
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
    });
});