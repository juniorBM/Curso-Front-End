var nome: string = 'SMN';
var numero: number = 2;
var isTrue: boolean = false;
var lista: string[] = ['SMN', 'TI'];

enum EstadoCivil {Solteiro, Casado};

var estadoDoSilvioSanto: EstadoCivil = EstadoCivil.Casado;


function teste(): void {
    console.log('Teste de lista do tipo void');
}

function testeString(): string {
    console.log('Teste de lista do tipo string');
    return 'retorno da função do tipo string';
}

console.log('Estado Civil: ' + EstadoCivil.Solteiro);
console.log('Silvio Santos: ' + estadoDoSilvioSanto);


teste();
testeString();