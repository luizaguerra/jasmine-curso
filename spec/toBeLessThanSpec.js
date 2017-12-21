describe("Comparador toBeLessThan", function(){
    it("Deve validar o uso do toBeLessThan", function(){
        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);
    });
});