function* greeting() {
    if(true) yield 'Hello, ';
    if(true) yield 'World!';
}

const generatorGreeting = greeting();

console.log(generatorGreeting.next().value);
console.log(generatorGreeting.next().value);
console.log(generatorGreeting.next().value);
