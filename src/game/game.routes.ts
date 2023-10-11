import { GameController } from './game.controller';
import { body } from 'express-validator';
import express from 'express';
import { Game } from './game.model';
import session from 'express-session';

declare module "express-session" {
    interface SessionData {
        game: Game;
    }
}

var router = express.Router();

router.use(session({
    secret: process.env.session_secret as string, // ajoutez la variable d'environnement correspondante au fichier .env
    saveUninitialized: false,
    resave: false
}));


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

router.get('/play', GameController.start);
router.post('/play',
        express.urlencoded({ extended: true }),
        body('guess').notEmpty().isInt({ min: 1, max: 1000 }),
        GameController.continue
        );

module.exports = router;