describe("Comparador toBeGreaterThan", function(){
    it("Deve validar o uso do toBeGreaterThan", function(){
        
        var PI = 3.1415;
        expect(4).toBeGreaterThan(PI);
        expect("5").toBeGreaterThan(PI);
        expect(3).not.toBeGreaterThan(PI);
    });
});