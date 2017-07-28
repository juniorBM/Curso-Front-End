"use strict";
exports.__esModule = true;
var status_1 = require("./status");
var Instituicao = (function () {
    function Instituicao() {
        this.lista = [];
    }
    Instituicao.prototype.novoEstudante = function (estudante) {
        var existeEstudante;
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].email === estudante.email) {
                existeEstudante = true;
                break;
            }
        }
        if (existeEstudante) {
            console.error('Estudante já cadastrado!');
        }
        else {
            this.lista.push(estudante);
            console.log('Estudante cadastrado com sucesso!');
        }
    };
    Instituicao.prototype.mostrarEstudante = function (filtro) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].status === filtro) {
                console.log('Alunos com status ' + status_1.Status[filtro] + ': ' + this.lista[i].nome);
            }
        }
    };
    return Instituicao;
}());
exports.Instituicao = Instituicao;
