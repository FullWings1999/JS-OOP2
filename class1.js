//封裝
//判斷傳入的參數是否為Object
const getName = function(thing){
    let name = "";
    if(typeof thing === "object" && thing.name)
        name = thing.name;
    else if (typeof thing === "string")
        name = thing;
    else
        name = "";

    return name;
};


class Dog{
    constructor(name,color){
        this.name = name;
        this.color= color;

        //嘴的功能
        this.mouth = {
            bite : function(somthing){
                console.log(`咬${somthing}`);
            },

            eat : function(somthing){
                console.log(`吃${somthing}`);
            },

            bark : function(){
                console.log(`叫`)
            } 
        }

    }
    
    bark(){
        //實作細節，將叫這個動作細節化，把邏輯運算的部分跟特性分開
        this.mouth.bark();
    }

    eat(somthing){
        let meet = getName(somthing);
        this.mouth.eat(meet);
    }

    bite(somthing){
        let meet = getName(somthing);
        this.mouth.bite(meet);
    }
}

class meet{
    constructor(name){
        this.name = name;
    }
}