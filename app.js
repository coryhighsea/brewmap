const express = require('express');
const app = express();



app.set('view engine', 'ejs')
process.env.PWD = process.cwd()


app.get('/', function(req, res){
    res.render('landing')
});

app.get('/info', function(req, res){
    res.render('info')
})

app.get('/newlevel', function(req, res){
    res.render('newLevel')
})

app.use(express.static(process.env.PWD + '/public'));

const PORT = process.env.PORT || 3000;   

app.listen(PORT, function(){
    console.log('The Brew Map server has started');
})


