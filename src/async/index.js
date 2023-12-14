

const fnAsync = () => {

    return new Promise((resolve, reject) => {

        (true) ? setTimeout(() => {resolve('¡resolve Async!')}, 2000) : reject(new Error('soy Error'));

    });

};



const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('soy fin');
};


console.log('antes de...');
anotherFn();
console.log('despues de...');
