function oldWay(name, age, country) {
    var name = name || 'edwin';
    var age = age || '32';
    var country = country || 'COL';

    console.log(name, age, country)
}

oldWay()
oldWay('Lorena', 25, 'MEX')

function newWay(name = 'edwin', age = 32, country = 'COL') {
    console.log(name, age, country)
}

newWay()
newWay('Diana', 30, 'MX')