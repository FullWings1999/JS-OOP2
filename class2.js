//繼承

//ES6寫法
class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    methFun(){
        console.log(`${this.name},${this.age}`);
    }
}

class Child extends Parent{
    constructor(price, name, age){
        super(name, age);
        //在最開始，要先建構Parent後才建構Child，super在extend語法中代表Parent的建構函數
        //super另一種用法，在static function下，super.functionName把父類別的內容一起接收使用
        this.price = price;
    }
}

let p = new Parent("Mother",30);
let c = new Child(5000,"Child",18);


/*
ES5寫法
function Partent(name, age){
    this.name = name;
    this.age = age;

    this.methodFun = function(){
        console.log(name, age);
    };
};

function Child (price){
    this.price = price;
};

Child.prototype = new Partent("son", 18);
*/