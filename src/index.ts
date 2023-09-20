import express from 'express';
import { Game } from './game/game.model';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';
var session = require('express-session')
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const port = process.env.port;

const app = express();

app.use(session({
    secret: process.env.session_secret, // ajoutez la variable d'environnement correspondante au fichier .env
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
    res.render('game/play', { game: new Game });
});

app.post('/play',
        express.urlencoded({ extended: true }),
        body('guess').isInt({ min: 1, max: 1000 }),
        (req, res) => {
             const result = validationResult(req);
            if (result.isEmpty()) {
                return res.send(`Hello!`);
            }
            console.log("test");
    });

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});