import { Instituicao } from './instituicao';
import { Estudante } from './estudante';
import { Status } from "./status";

class Main {
    constructor(){
        var junior = new Estudante('Junior', 20, 'junior@junior', Status.Andamento);
        var mario = new Estudante('Mario', 23, 'mario@mario', Status.Andamento);
        var diego = new Estudante('Diego', 20, 'diego@diego', Status.Concluido, '121223');
        var instituicao = new Instituicao();
        instituicao.novoEstudante(junior);
        instituicao.novoEstudante(mario);
        instituicao.novoEstudante(diego);
        instituicao.novoEstudante(diego);
        instituicao.mostrarEstudante(Status.Concluido);
    }
}

new Main();