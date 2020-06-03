const express = require('express');
const hbs = require('hbs');

const app = express ();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/kahlo', (req, res)=>{
    res.render('frida', {
        autor : 'Fernanda Márquez',
        year : new Date().getFullYear(),
        tutle : 'Inicio'
    });
});

app.get('/davinci', (req, res)=>{
    res.render('leonardo', {
        autor : 'Fernanda Márquez',
        year : new Date().getFullYear(),
        tutle : 'Inicio'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vincent', {
        autor : 'Fernanda Márquez',
        year : new Date().getFullYear(),
        tutle : 'Inicio',
        semestre : ' 4 ',
        grupo : 'G',
    });
});

app.get('/pablo', (req, res)=>{
    res.render('picasso', {
        autor : 'Fernanda Márquez',
        year : new Date().getFullYear(),
        tutle : 'Inicio'
    });
});



app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});