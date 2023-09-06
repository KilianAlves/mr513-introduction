import {Rectangle, Square, Circle, displayShape} from "./shapes";

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
        
    
    const rectangle = new Rectangle("Rectangle", 2, 4);
    const square = new Square("Carré", 3);
    const circle = new Circle("Cercle", 10);
    
    displayShape(rectangle); // doit afficher "Rectangle est un polygone. Son aire est 8."
    displayShape(square);    // doit afficher "Carré est un polygone. Son aire est 9."
    displayShape(circle);    // doit afficher "Cercle n'est pas un polygone. Son aire est 314.1592653589793"
                    