const myPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) setTimeout(() => resolve('Hello world'), 3000)
        else reject(new Error('Something bad happened'))
    })
}

(async () => {
    try {
        const greeting = await myPromise()
        console.log(greeting)
    }catch {
        console.log(error)
    }
})()
