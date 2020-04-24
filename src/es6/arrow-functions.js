const names = [
    { name: "Edwin", age: 32 },
    { name: "Lorena", age: 25 }
];

names.forEach(function (item) {
    console.log(item.name);
});

names.forEach(item => console.log(item.name));
