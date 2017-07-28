import { Automovel } from './interface';
import { Cor } from "../Classes 2/cor";

export class Carro implements Automovel {

    constructor (
        public nome: string,
        public cor: Cor,
        public arCondicionado: boolean) {}

        setCor(cor: Cor): void {
            this.cor = cor;
        }
        getCor(): string {
            return 'Cor do carro: ' + Cor[this.cor];
        }
}