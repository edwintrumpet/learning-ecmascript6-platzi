const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) resolve('Hey!');
        else reject('Ups!');
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err));
