
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'; 

const data = {
  "title": "producto de fabio",
  "price": 6969,
  "description": "esta es la descripcion de producto de fabio",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
};



function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    return response;
}



postData(`${API}/products`, data)
.then(response => response.json())
.then(datos => console.log(datos));



/*
retorno:
[Running] node "d:\escritorio\curso-asincronismo\src\promise\tempCodeRunnerFile.js"
{
  title: 'producto de fabio',
  price: 6969,
  description: 'esta es la descripcion de producto de fabio',
  images: [ 'https://placeimg.com/640/480/any' ],
  category: {
    id: 1,
    name: 'clothes',
    image: 'https://imgur.com/gallery/i7c3r3D',
    creationAt: '2023-12-11T05:13:28.000Z',
    updatedAt: '2023-12-11T10:23:40.000Z'
  },
  id: 192,
  creationAt: '2023-12-11T18:49:41.000Z',
  updatedAt: '2023-12-11T18:49:41.000Z'
}

[Done] exited with code=0 in 0.591 seconds
*/