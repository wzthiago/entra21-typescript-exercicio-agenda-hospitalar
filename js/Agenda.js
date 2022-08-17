export class Agenda {
    // public dataCancelamento: string;
    constructor(id, medicos, pacientes, dataAgendamento) {
        this.id = id;
        this.medicos = medicos;
        this.pacientes = pacientes;
        this.dataAgendamento = dataAgendamento;
    }
}
