describe("Comparador toContain", function(){
    it("Deve validar o uso do toContain", function(){
        var texto = "Meu nome é Luiza";
        var cores = ["azul", "amarelo", "vermelho"];
        
        expect(texto).toContain("Luiza");
        expect(texto).not.toContain("luiza");

        expect(cores).toContain("azul");
        expect(cores).not.toContain("verde");
    });
});