function Carro () {
    var modelo;
    var cor;
    var ano;

    this.getModelo = function() {
        return modelo;
    }
    this.getCor = function() {
        return cor;
    }
    this.getAno = function() {
        return ano;
    }

    this.setModelo = function(data) {
        modelo = data;
    }
    this.setCor = function(data) {
        cor = data;
    }
    this.setAno = function(data) {
        ano = data;
    }

    this.mostrarDados = function() {
        return 'Modelo: ' + this.getModelo() + '\n' + 'Cor: ' + this.getCor() + '\n' 
        + 'Ano: ' + this.getAno();
    }

}

var carro = new Carro();
carro.setModelo('Fusca');
carro.setCor('Preto');
carro.setAno('2017');
console.log(carro.mostrarDados());