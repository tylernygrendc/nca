import functions from 'firebase-functions';
import express from 'express';

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('website-home', {title: "Home"});
});

export const routes = functions.https.onRequest(app);