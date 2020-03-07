const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql27!',
    database: 'join_us',
  });

  
con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });


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


con.end();


