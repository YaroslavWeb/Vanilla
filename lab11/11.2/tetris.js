// Фабрика 11.2

// функция для перемешки элементов массива
let shuffle = array => array.sort(() => Math.random() - 0.5);

// Продукт
class tetrisinka{
    constructor(name){this.name = name;}
    name(){return this.name;}
}

//Конкретный создатель
class fabrica{
    make(){
        throw('вы должны реализовать этот метод');
    }
}

// Конкретный продукт
class tetrisinka1 extends fabrica{
    make(){
        return new tetrisinka('т-образная');
    }
}

class tetrisinka2 extends fabrica{
    make(){
        return new tetrisinka('г-образная');
    }
}
class tetrisinka3 extends fabrica{
    make(){
        return new tetrisinka('прямая');
    }
}
class tetrisinka4 extends fabrica{
    make(){
        return new tetrisinka('кубик');
    }
}
class tetrisinka5 extends fabrica{
    make(){
        return new tetrisinka('супер-фигура');
    }
}

//Создатель
let fabrics = [
    new tetrisinka1,
    new tetrisinka2,
    new tetrisinka3,
    new tetrisinka4,
    new tetrisinka5
];


for (let index = 0; index < 10; index++) {
    if (index >= fabrics.length) {
        shuffle(fabrics);
    }
    console.log(fabrics[index % fabrics.length].make())
}