const calculadora = {
    somar: function(a , b){
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    },

    divisao: function(a,b){
        return a/b
    },

    vezes: function(a,b){
        return a*b
    },

    dobrar: function(a){
        return a*2
    },

    raiz: function(a){
        return a*a
    }
    
    };

    console.log(calculadora.somar(10,9));
    console.log(calculadora.subtrair(10,8));
    console.log(calculadora.divisao(20,9));
    console.log(calculadora.vezes(20,10));
    console.log(calculadora.dobrar(10));
    console.log(calculadora.raiz(10))