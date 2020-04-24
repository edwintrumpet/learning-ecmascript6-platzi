const object = {
    name: 'Edwin',
    age: 32,
    country: 'COL'
}

const { country, ...all } = object

console.log(country)
console.log(all)
