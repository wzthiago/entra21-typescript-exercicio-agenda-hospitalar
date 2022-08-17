import { Agenda } from "./Agenda.js";
import { Medico } from "./Medico.js";
import { Paciente } from "./Paciente.js";


let paciente01: Paciente = new Paciente("Steve Rogers", 29, "Masculino", "897.123.489-63", "Sarah Rogers", "Joseph Rogers",
    "steve.rogers@yahoo.com", "47 98965-5263", "Av das Americas", "407", "88780-000", "Imbituba",
    "SC", "BR", "dor", "2022, 12, 30");

let paciente02: Paciente = new Paciente("Peter Parker", 21, "Masculino", "023.156.159-62", "Mary Parker", "Richard Parker",
    "peter.parker@gmail.com", " 47 98563-4541", "Rua dos Limoeiros", "569", "88780-000", "Imbituba",
    "SC", "BR", "Limpeza dentaria", "2022, 12, 30");

let paciente03: Paciente = new Paciente("Anthony Stark", 58, "Masculino", "123.563.159-85", "Maria Stark", "Howard Stark",
    "iron_man@gmail.com", " 48 98845-2274", "Av da rendeira", "123", "56600-006", "Smallville", "SC",
    "BR", "Troca de lentes", "2022, 12, 30");

let medico01: Medico = new Medico("Robin Pereira", 18, "Outro", "916.149.670-75", "Robina Pereira", "Robin Wood",
"robin_batata123@yahoo.com", "49 98874-6352", "Rua Wood", "100", "88780-000", "Imbituba", "SC",
"BR", "Dentista", "CRM/SC 698547");

let medico02: Medico = new Medico("Clark Kent", 35, "Masculino", "023.236.896-45", "Martha Kent", "Jonathan Kent",
"clarkinho_56@gmail.com", " 47 98852-9633", "Rua dos El", "1569", "56600-006", "Smallville",
"SC", "BR", "Oftalmologista", "CRM/SC 698512");

let medico03: Medico = new Medico("Diana Prince", 35, "Feminino", "897.123.489-63", "Hipolita Prince", "Zeus Prince",
"diana_prince@gmail.com", " 48 98854-7888", "Av das Pedras", "78", "89600-000", "Joa�aba",
"SC", "BR", "Neurologista", "CRM/SC 123489");


// let agendamento01: Agenda = new ();
// let agendamento01: Agenda = new ();

console.log(paciente01.apresentar());
console.log(paciente01.nome, paciente01.sexo, paciente01.cpf, paciente01.patologia);

console.log(paciente02.apresentar());
console.log(paciente02.nome, paciente02.sexo, paciente02.cpf, paciente02.patologia);

console.log(paciente03.apresentar());
console.log(paciente03.nome, paciente03.sexo, paciente03.cpf, paciente03.patologia);

console.log(medico01.apresentar());
console.log(medico01.nome, medico01.sexo, medico01.cpf, medico01.crm, medico01.especialidade);

console.log(paciente02.apresentar());
console.log(medico02.nome, medico02.sexo, medico02.cpf, medico01.crm, medico02.especialidade);

console.log(medico03.apresentar());
console.log(medico03.nome, medico03.sexo, medico03.cpf, medico01.crm, medico03.especialidade);



