import { Cor } from './cor';

class Automovel {

    //? se colocado na frente do parametro, o mesmo vira opcional no momento de instanciar a classe
    //nome?: string - parametro opcional sempre fica no fim(sempre o ultimo)
    constructor(
        public nome: string, 
        public ano: number, 
        public placa: string,
        public cor: Cor
    ) {
    }
    getCor() {
        console.log('Cor do automovel: ' + Cor[this.cor]);
    }
}

var fusca = new Automovel('Fusca', 2012, 'AAA-0000', Cor.Azul);
console.log(fusca.nome);
