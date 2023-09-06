
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
        