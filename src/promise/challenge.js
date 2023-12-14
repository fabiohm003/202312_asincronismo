

import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'; 

function fetchData(urlApi){
    return fetch(urlApi);
}




fetchData(`${API}/products`)
.then(response => response.json())
.then((products) => {
    return fetchData(`${API}/products/${products[0].id}`);
})
.then(response => response.json())
.then((product) => {
    return fetchData(`${API}/categories/${product.category.id}`);
})
.then(response => response.json())
.then(category => console.log(category))
.catch(error => console.log(error))
.finally(() => console.log('finalizado.'));





/*
fetchData(`${API}/products`)
.then((dato1) => {console.log("paso dato1"); return dato1;})
.then((dato2) => {console.log("paso dato2"); return dato2.json();})
.then((dato3) => {console.log("paso dato3", dato3);})
*/


