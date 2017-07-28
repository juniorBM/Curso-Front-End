class Pessoa {
    constructor(
        public nome: string,
        public cpf: number,
        protected tipoSangue: string
    ){}

    getTipoSangue() {
        return this.tipoSangue;
    }
}

class Herdeiro extends Pessoa{
    constructor(nome, cpf, tipoSangue){
        super(nome, cpf, tipoSangue);
    }
}

var silvioSantos = new Herdeiro('Silvio', 121232, 'O+');
console.log(silvioSantos.getTipoSangue());
