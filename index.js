const express = require('express');


const hbs = require('hbs');


const app = express();


app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Fernanda',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vincent', {
        autor : 'Yo mero y que',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/fri', (req, res)=>{
    res.render('frida', {
        autor : 'Frida Kahlo',
        year : new Date().getFullYear(),
        title : 'Frida Kahlo'
    });
});

app.get('/vinci', (req, res)=>{
    res.render('vinci', {
        autor : 'Gandalf el gris',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci',
        algo : "No se que poner"
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
