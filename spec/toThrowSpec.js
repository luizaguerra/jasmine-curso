describe("Comparador toThrow", function(){
    it("Deve validar o uso do toThrow", function(){
        function multiplicar(){
            numero * 10;
        }

        function somar (n1, n2){
            return n1+n2;
        }
        
        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
});