

function* funciongen(){
    yield 1;
    yield 2;
    yield 3;
}


const g = funciongen();

console.log(g.next().value);
//salida 1

console.log(g.next().value);
//salida 2

console.log(g.next().value);
//salida 3




///////////////////////
///////////////////////
///////////////////////


function* iterador(array){

    for (let value of array){
        yield value;
    }

}

const it = iterador(['fabio','omar','ana','lucia','juan']);

console.log(it.next().value); //fabio
console.log(it.next().value); //omar
console.log(it.next().value); //ana
console.log(it.next().value); //lucia
console.log(it.next().value); //juan
console.log(it.next().value); //undefined
console.log(it.next().value); //undefined
