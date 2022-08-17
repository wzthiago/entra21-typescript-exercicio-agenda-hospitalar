import { Pessoa } from "./Pessoa.js";
export class Medico extends Pessoa {
    constructor(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais, especialidade, crm) {
        super(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais);
        this.especialidade = especialidade;
        this.crm = crm;
    }
    apresentar() {
        return `Olá sou Médico ${this.nome}`;
    }
}
