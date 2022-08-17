import { Pessoa } from "./Pessoa.js";
export class Paciente extends Pessoa {
    constructor(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais, patologia, dataCadastro) {
        super(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais);
        this.patologia = this.patologia;
        this.dataCadastro = this.dataCadastro;
    }
    apresentar() {
        return `Olá sou o Paciente ${this.nome}`;
    }
}
