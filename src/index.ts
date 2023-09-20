import express from 'express';
import { Game } from './game/game.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const port = process.env.port;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.get('/:title', (req, res) => {
//    res.render('index', { title: req.params.title });
//});

app.get('/play', (req, res) => {
    res.render('game/play', { game: new Game });
});

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});