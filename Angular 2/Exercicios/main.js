"use strict";
exports.__esModule = true;
var instituicao_1 = require("./instituicao");
var estudante_1 = require("./estudante");
var status_1 = require("./status");
var Main = (function () {
    function Main() {
        var junior = new estudante_1.Estudante('Junior', 20, 'junior@junior', status_1.Status.Andamento);
        var mario = new estudante_1.Estudante('Mario', 23, 'mario@mario', status_1.Status.Andamento);
        var diego = new estudante_1.Estudante('Diego', 20, 'diego@diego', status_1.Status.Concluido, '121223');
        var instituicao = new instituicao_1.Instituicao();
        instituicao.novoEstudante(junior);
        instituicao.novoEstudante(mario);
        instituicao.novoEstudante(diego);
        instituicao.novoEstudante(diego);
        instituicao.mostrarEstudante(status_1.Status.Concluido);
    }
    return Main;
}());
new Main();
