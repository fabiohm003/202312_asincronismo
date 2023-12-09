

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamar el recurso

const API = 'https://api.escuelajs.co/api/v1'; //api del servicio


//callback corresponde a la funcion diseñada para recibir los resutados de la peticion API
function fetchData(urlApi, callback) {

    let xhttp = new XMLHttpRequest(); //crear objeto

    xhttp.open('GET', urlApi, true); //peticion GET

    //escuchar estados
    xhttp.onreadystatechange = function(event){

        //validar estados en el que se encuentra
        if(xhttp.readyState === 4){

            //verificar cod estado de servidor
            if(xhttp.status===200){
                return callback(null, JSON.parse(xhttp.responseText)); //1er argumento es usado en caso de error; JSON.parse(xhttp.resposeText) == pasar respuesta recibida en json a objeto
            }
            else {
                const error = new Error('Error' + urlApi);
                return callback(error, null); //2do argumento es usado en caso de exito /// error == retornar mensaje de error obtenido
            }

        } 
    }

    xhttp.send(); //ejecutar
}




/*
fetchData(
    `${API}/products`, function(error1,data1){
    
        if(error1) return console.error(error1);
        
        fetchData(
            `${API}/products/${data1[0].id}`, function(error2,data2) {

                if(error2) return console.error(error2);
                
                fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){
                    if(error3)return console.error(error3);
                    
                    console.log(data1[0]);console.log(data2.title);
                    console.log(data3.name);
                });
            }
        );
    }
);
*/










const retorno1 = () => {
    fetchData(`${API}/products`, function(error1, data1){
        if(error1) {
            return console.error(error1);
        } 
        
        retorno2(data1);
    });
}



const retorno2 = (data1) => {

    console.log(`retorno2: ${API}/products/${data1[0].id}`);

    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if(error2) {
            return console.error(error2);
        } 
        
        retorno3(data1, data2);
    });
}


const retorno3 = (data1, data2) => {

    console.log(`retorno3: ${API}/categories/${data2?.category?.id}`);

    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
        if(error3) {
            return console.error(error3);
        } 
        
        console.log(data1[0]);console.log(data2.title);
        console.log(data3.name);
        
    });
}



retorno1();







