import { Pessoa } from './pessoa.interface';
import { Status } from './status';

export class Estudante implements Pessoa {
    constructor(
        public nome: string,
        public idade: number,
        public email: string,
        public status: Status,
        public telefone?: string
    ){
    }

    

}

