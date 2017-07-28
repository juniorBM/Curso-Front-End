var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = (function () {
    function Pessoa(nome, cpf, tipoSangue) {
        this.nome = nome;
        this.cpf = cpf;
        this.tipoSangue = tipoSangue;
    }
    Pessoa.prototype.getTipoSangue = function () {
        return this.tipoSangue;
    };
    return Pessoa;
}());
var Herdeiro = (function (_super) {
    __extends(Herdeiro, _super);
    function Herdeiro(nome, cpf, tipoSangue) {
        return _super.call(this, nome, cpf, tipoSangue) || this;
    }
    return Herdeiro;
}(Pessoa));
var silvioSantos = new Herdeiro('Silvio', 121232, 'O+');
console.log(silvioSantos.getTipoSangue());
