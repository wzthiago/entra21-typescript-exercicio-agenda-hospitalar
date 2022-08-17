import { Pessoa } from "./Pessoa.js";

export class Medico extends Pessoa {

    public especialidade: string;
    public crm: string;

    constructor(nome: string, idade: number, sexo: string, cpf: string, nomeMae: string,
        nomePai: string, email: string, telefone: string, rua: string, numero: string,
        codigoPostal: string, cidade: string, estado: string, pais: string, especialidade: string, crm: string) {
        super(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais)

        this.especialidade = especialidade;
        this.crm = crm;

    }

    apresentar(): string{
        
        return `Olá sou Médico ${this.nome}`
    }


}