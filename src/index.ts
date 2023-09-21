import express from 'express';
import { Game } from './game/game.model';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import session from 'express-session';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const port = process.env.port;

const app = express();

app.use(session({
    secret: process.env.session_secret as string, // ajoutez la variable d'environnement correspondante au fichier .env
    saveUninitialized: false,
    resave: false
}));

declare module "express-session" {
    interface SessionData {
        game: Game;
    }
}

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.get('/:title', (req, res) => {
//    res.render('index', { title: req.params.title });
//});

app.get('/play', (req, res) => {
    const game = new Game();
    req.session.game = game;
    console.log(game)
    res.render('game/play', { game });
    
    
});

app.post('/play',
        express.urlencoded({ extended: true }),
        body('guess').notEmpty().isInt({ min: 1, max: 1000 }),
        (req, res) => {
            const gameModel = req.session.game as Game;
            const game = new Game(gameModel);
            const result = validationResult(req);
            if (result.isEmpty()) {
                console.log(req.session.game);
                game.playOneTurn(parseInt(req.body.guess));
                console.log(game)
                req.session.game = game;
            }
            res.render('game/play', { game });
    });

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});