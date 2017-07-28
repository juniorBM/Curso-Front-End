import { Cor } from './cor';

class Automovel {
    constructor(
        public nome: string,
        public cor: string
    ){}
}

var fusca = new Automovel('Fusca', 'Cor.Azul');
console.log(fusca);
