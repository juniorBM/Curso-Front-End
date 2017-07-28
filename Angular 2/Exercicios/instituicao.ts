import { Estudante } from './estudante';
import { Status } from "./status";
export class Instituicao {
    constructor(){
        this.lista = [];
    }

    lista: Estudante[];

    novoEstudante(estudante: Estudante): void {
        var existeEstudante: boolean;
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].email === estudante.email) {
                existeEstudante = true;
                break;
            }
        }
        if (existeEstudante) {
            console.error('Estudante já cadastrado!');
        }else {
            this.lista.push(estudante);
            console.log('Estudante cadastrado com sucesso!');
        }
    }

    mostrarEstudante(filtro: Status): void {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].status === filtro) {
                console.log('Alunos com status ' + Status[filtro] + ': ' + this.lista[i].nome);
            }
        }
    }
}