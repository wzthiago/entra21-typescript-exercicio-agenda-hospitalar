import { Pessoa } from "./Pessoa.js";

export class Paciente extends Pessoa {

    public patologia: string;
    public dataCadastro: Date;

    constructor(nome: string, idade: number, sexo: string, cpf: string, nomeMae: string,
        nomePai: string, email: string, telefone: string, rua: string, numero: string,
        codigoPostal: string, cidade: string, estado: string, pais: string, patologia: string, dataCadastro: string) {
        super(nome, idade, sexo, cpf, nomeMae, nomePai, email, telefone, rua, numero, codigoPostal, cidade, estado, pais)

        this.patologia = this.patologia;
        this.dataCadastro = this.dataCadastro;

    }

    apresentar(): string{
        
        return `Olá sou o Paciente ${this.nome}`
    }


    }