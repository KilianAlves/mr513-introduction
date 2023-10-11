import { NextFunction, Request, Response } from 'express';
import { Game, GameStatus  } from './game.model';
import { validationResult } from 'express-validator';
import session from 'express-session';

export class GameController {
    
    static start(req: Request, res: Response, next: NextFunction): void {
        const game = new Game();
        req.session.game = game;
        console.log(game)
        res.render('game/play', { game });

}
    static continue(req: Request, res: Response, next: NextFunction): void {
        const gameModel = req.session.game as Game;
        const game = new Game(gameModel);
        const result = validationResult(req);
        if (result.isEmpty()) {
            console.log(req.session.game);
            game.playOneTurn(parseInt(req.body.guess));
            console.log(game)
            req.session.game = game;
        }
        if(game.status == GameStatus.won) {
            res.render('game/won', { game });
        } else if (game.status == GameStatus.lost) {
            res.render('game/lost', { game });
        } else {
            res.render('game/play', { game });
        }
    }
}