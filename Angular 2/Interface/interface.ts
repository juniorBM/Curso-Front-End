import { Cor } from "../Classes 2/cor";

export interface Automovel {
    nome: string,
    cor: Cor;

    getCor(): string;
}