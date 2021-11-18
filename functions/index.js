import express from 'express';

const route = express();

route.set('views', './views');
route.set('view engine', 'pug');

route.get('/', (req, res) => {
    res.render('home');
});
