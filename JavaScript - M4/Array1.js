// 1 Array
// 3 objetos computador {tombamento, localização, processador, ativo}
// Criar uma função que retorne todos os computadores inativos
// Imprima os inativos ou informe que não possui inativos
let array = [];


let comp1 = {
    tombamento: '00001',
    localizacao: 'L1',
    processador: 'i3',
    ativo: true
}

let comp2 = {
    tombamento: '00002',
    localizacao: 'L2',
    processador: 'i5',
    ativo: true
}

let comp3 = {
    tombamento: '00003',
    localizacao: 'L3',
    processador: 'i7',
    ativo: false
}

array.push(comp1, comp2, comp3);

//console.log(array);

function computadoresAtivos(){
    let ativos = [];
    let objeto;
    for(let i = 0; i < array.length; i++){
        objeto = array[i];
        if(objeto.ativo === true){
            ativos.push(objeto);
        }
        return ativos;
    }
}

let ativos = []
ativos = computadoresAtivos();
console.log(ativos);









