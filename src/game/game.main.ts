import { Game, GameStatus } from './game.model';
import { createInterface } from "readline";
import { exit } from 'node:process';

const game = new Game();
console.log(game);

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

function play(): void {

    readLine.question('Entrez un nombre entre 1 et 1000 :',(answer) => {
        const chiffre:number = parseInt(answer);

        if(chiffre > 1000 || chiffre < 1) {
            play();
        } else {
            game.playOneTurn(chiffre);


            switch (game.status) {
                case GameStatus.won:
                    let essais: number = 10-game.remainingTries;
                    console.log("Vous avez gagné en " +essais+" essais.");
                    exit(1);
                case GameStatus.lost:
                    console.log("Dommage !");
                    console.log('Il fallait deviner le nombre '+game.number);
                    exit(1);
                case GameStatus.higher:
                    console.log("Le nombre à deviner est supérieur. Il reste "+game.remainingTries+" essais.");
                    play();
                    break;
                case GameStatus.lower:
                    console.log("Le nombre à deviner est inférieur. Il reste "+game.remainingTries+" essais.");
                    play();
                    break;
            }
        }
        
    })
}

console.log('Vous avez 10 essais pour deviner un nombre compris entre 1 et 1000.')
    
play();