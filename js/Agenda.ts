import { Medico } from "./Medico.js";
import { Paciente } from "./Paciente.js";

export class Agenda {

    public id: number;
    public medicos: Array<Medico>;
    public pacientes: Array<Paciente>;
    public dataAgendamento: string;
    // public dataCancelamento: string;

    constructor(id: number, medicos: Array<Medico>, pacientes: Array<Paciente>, dataAgendamento: string) {
        this.id = id;
        this.medicos = medicos;
        this.pacientes = pacientes;
        this.dataAgendamento = dataAgendamento;

    }

}
