import { Automovel } from './interface';
import { Cor } from "../Classes 2/cor";

export class Carro implements Automovel {

    constructor (
        public nome: string,
        public cor: Cor,
        private arCondicionado: boolean) {}

        setCor(cor: Cor): void {
            this.cor = cor;
        }
        getCor(): string {
            return 'Cor do carro: ' + Cor[this.cor];
        }
        
        public getArCondicionado(): boolean {
            return this.arCondicionado;
        }
}

var fusca = new Carro('Fusca', Cor.Branca, true);
console.log('nome: ' + fusca.nome);
console.log('ar Condicionado: ' + fusca.getArCondicionado());
