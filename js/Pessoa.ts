export class Pessoa {

    public nome: string;
    public idade: number;
    public sexo: string;
    public cpf: string;
    public nomeMae: string;
    public nomePai: string;
    public email: string;
    public telefone: string;
    public rua: string;
    public numero: string;
    public codigoPostal: string;
    public cidade: string;
    public estado: string;
    public pais: string;

    constructor(nome: string, idade: number, sexo: string, cpf: string, nomeMae: string,
                nomePai: string, email: string, telefone: string, rua: string, numero: string,
                codigoPostal: string, cidade: string, estado: string, pais: string){
                    this.nome=nome;
                    this.idade=idade;
                    this.sexo=sexo;
                    this.cpf=cpf;
                    this.nomeMae=nomeMae;
                    this.nomePai=nomePai;
                    this.email=email;
                    this.telefone=telefone;
                    this.rua=rua;
                    this.numero=numero;
                    this.codigoPostal=codigoPostal;
                    this.cidade=cidade;
                    this.estado=estado;
                    this.pais=pais;

                }
}