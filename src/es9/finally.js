const greetingPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => resolve('Hello world!'), 3000)
        }else {
            reject(new Error('Test error'))
        }
    })
}

greetingPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Job ends'))
