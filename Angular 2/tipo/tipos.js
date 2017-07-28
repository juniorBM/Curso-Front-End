var nome = 'SMN';
var numero = 2;
var isTrue = false;
var lista = ['SMN', 'TI'];

var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Solteiro"] = 0] = "Solteiro";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
})(EstadoCivil || (EstadoCivil = {}));
;

var estadoDoSilvioSanto = 1 /* Casado */;

function teste() {
    console.log('Teste de lista do tipo void');
}

function testeString() {
    console.log('Teste de lista do tipo string');
    return 'retorno da função do tipo string';
}

console.log('Estado Civil: ' + 0 /* Solteiro */);
console.log('Silvio Santos: ' + estadoDoSilvioSanto);

teste();
testeString();
