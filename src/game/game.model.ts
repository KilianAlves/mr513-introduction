export enum GameStatus {
    new,
    won,
    lost,
    higher,
    lower
}

export class Game {
    public number: number;
    private __remainingTries: number;
    private _status: GameStatus;

    constructor() {
        this.__remainingTries = 10;
        this.number = Math.floor(Math.random() * 1000) + 1
        this._status = GameStatus.new;
    }

    playOneTurn(guess: number): void {
        console.log('playOneTurn : TODO');      
    }
}