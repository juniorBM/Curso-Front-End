//Function declaration - É carregada antes do codigo ser interpretado
function divisao(a, b) {
    return a / b;
}

//Function expression - É carregada durante a interpretação do codigo
var div = function(a, b) {
    return a / b;
}

console.log(divisao(3, 5));
console.log(div(2, 4));