describe("Comparador toMatch", function(){
    it("Deve validar o uso do toMatch", function(){
        var texto = "teste com jasmine";
        expect(texto).toMatch("jasmine");
        expect(texto).toMatch(/JaSmInE/i);

        expect("12345-678").toMatch(/^\d{5}-\d{3}$/);
    });
});