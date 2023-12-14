

const promise = new Promise( function (resolve, reject){

    resolve('hey resolve');

});



const cows = 9;


const countCows = new Promise( function (resolve, reject){


    if (cows > 10){
        resolve('si hay el total de vacas');
    } else {
        reject('NO hay el total de vacas');
    }


    /*
    setTimeout(() => {
        console.log('Paso por setTimeout');

        if (cows > 10){
            resolve('setTimeout: si hay el total de vacas');
        } else {
            reject('setTimeout: NO hay el total de vacas');
        }
    

    }, 5000);
    */


});


console.log('inicio');


countCows.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('seccion final');
});


console.log('fin');




