import express from 'express';


// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

var routes = require('./game/game.routes');
const app = express();
app.use('/', routes);
const port = process.env.port;

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.get('/:title', (req, res) => {
//    res.render('index', { title: req.params.title });
//});

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});