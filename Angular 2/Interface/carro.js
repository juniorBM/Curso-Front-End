"use strict";
exports.__esModule = true;
var cor_1 = require("../Classes 2/cor");
var Carro = (function () {
    function Carro(nome, cor, arCondicionado) {
        this.nome = nome;
        this.cor = cor;
        this.arCondicionado = arCondicionado;
    }
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getCor = function () {
        return 'Cor do carro: ' + cor_1.Cor[this.cor];
    };
    Carro.prototype.getArCondicionado = function () {
        return this.arCondicionado;
    };
    return Carro;
}());
exports.Carro = Carro;
var fusca = new Carro('Fusca', cor_1.Cor.Branca, true);
console.log('nome: ' + fusca.nome);
console.log('ar Condicionado: ' + fusca.getArCondicionado());
