function helloPromise() {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => resolve('Hello world'), 3000)
        }else {
            reject(new Error('Test error'))
        }
    })
}

async () => {
    const hello = await helloPromise()
    console.log(hello)
}


// Handling errors
(async () => {
    try {
        const hello = await helloPromise()
        console.log(hello)
    } catch (error) {
        console.log('Ha ocurrido un error');
        console.log(error);
    }
})()
