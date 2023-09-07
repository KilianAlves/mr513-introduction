export enum GameStatus {
    new,
    won,
    lost,
    higher,
    lower
}

export class Game {
    public readonly number: number;
    private _remainingTries: number;
    private _status: GameStatus;

    constructor() {
        this._remainingTries = 10;
        this.number = Math.floor(Math.random() * 1000) + 1
        this._status = GameStatus.new;
    }

    get remainingTries(): number {
        return this._remainingTries;
    }

    get status(): number {
        return this._status;
    }

    playOneTurn(guess: number): void {
        if(guess == this.number) {
            this._status = GameStatus.won;
        } else {
            this._remainingTries = this._remainingTries-1;
            if (this._remainingTries == 0) {
                this._status = GameStatus.lost
            } else if(guess > this.number) {
                this._status = GameStatus.lower;
            } else {
                this._status = GameStatus.higher;
            }
        }
    }
}