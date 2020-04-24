const names = [
    { name: "Edwin", age: 32 },
    { name: "Lorena", age: 25 }
];

const listOfNamesWithOldFunctions = names.map(function (item) {
    console.log(item.name);
});

const listOfNamesWithArrowFunctions = names.map(item => console.log(item.name));