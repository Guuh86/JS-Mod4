let aluno = {
    nome: {
        primeiroNome: 'Luiz Gustavo', 
        segundoNome: 'Brito Oliveira'
    },
    matricula: '20172TINF0252',
    disciplinas: [
        'Programação Web', 
        'Algoritmos'
    ],
    idade: 23
}

let voo = {
    numero: 9619,
    compainha: 'Latam Airlines',
    origem: {
        aeroporto: 'Aeroporto Internacional de Guarulhos', 
        data: '10/10/2019', 
        hora: '00:00'},
    destino: {
        aeroporto: 'Aeroporto Internacional de Brasília', 
        data: '10/10/2019', 
        hora: '04:00'},
    escalas: [
        {
            aeroporto: 'Aeroporto Internacional Santos Dumont',
            data: '10/10/2019',
            hora: '01:00'
        },
        {
            aeroporto: 'Aeroporto Internacional de Confins - Tancredo Neves',
            data: '10/10/2019',
            hora: '02:45'
        }
    ]
}

console.log(aluno);
console.log(voo);