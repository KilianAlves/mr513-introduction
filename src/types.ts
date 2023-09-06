
// Ajoutez les annotations de types pour les variables suivantes :

let lastName: string = "Dupont";
let age: number = 23;
let isStudent: boolean = true;
let marks: number[] = [ 10, 15.5, 8 ];


// Ajoutez les annotations de type à la déclaration de la fonction suivante et écrivez son code :

function isPalindrome(word: string): boolean {

    if(word == word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

console.log("isPalindrome ---------------------------------------------------");
console.log(isPalindrome('radar')); // doit afficher true
console.log(isPalindrome('abca')); // doit afficher false


// Ajoutez les annotations de type à la déclaration de la fonction suivante et écrivez son code :

interface Vector2D {
    x: number;
    y: number;
}

function dotProduct(vector1: Vector2D, vector2: Vector2D): number {
    let ResX: number = vector1.x * vector2.x;
    let ResY: number = vector1.y * vector2.y;
    return ResX + ResY;
}

console.log("dotProduct ---------------------------------------------------");
console.log(dotProduct({ x : 1, y : 2 }, { x : 4, y : 5 })); // doit afficher 14
        

interface Shape {
    readonly name: string;
    readonly isPolygon: boolean;
    getArea(): number;
}

abstract class AbstractShape implements Shape{
    readonly name: string;
    readonly isPolygon: boolean;

    constructor(name: string, isPolygon: boolean) {
        this.name = name;
        this.isPolygon = isPolygon;
    }
    abstract getArea(): number;
}

class Rectangle  extends AbstractShape{
    side1: number;
    side2: number;

    constructor(name: string, side1: number, side2: number) {
        super(name,true);
        this.side1 = side1;
        this.side2 = side2;
    }

    getArea(): number {
        return this.side1 * this.side2;
    }
}

class Square extends Rectangle{
    constructor(name: string, side: number) {
        super(name,side, side)
    }
}

class Circle extends AbstractShape{
    radius: number;

    constructor(name: string, radius: number) {
        super(name,false);
        this.radius = radius;
    }

    getArea(): number {
        return this.radius* Math.PI;
    }
}



