import { Game, GameStatus } from './game.model';
import { createInterface } from "readline";
import { exit } from 'node:process';

const game = new Game();
console.log(game);
game.playOneTurn(500);
console.log(game);

    
const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

function play(): void {

    const game = new Game();

    readLine.question('Vous avez 10 essais pour deviner un nombre compris entre 1 et 1000.',(answer) => {
        const chiffre:number = parseInt(answer);

        if(chiffre > 1000 || chiffre < 1) {
            play();
        } else {
            game.playOneTurn(chiffre);

            if(game.status == GameStatus.won) {
                console.log("Vous avez gagné en");
                exit(1);
            } else if(game.status == GameStatus.lost) {
                console.log("Dommage !");
                exit(1);
            } else if(game.status == GameStatus.higher) {

            } else if(game.status == GameStatus.lower) {

            }
        }
        
    })
}