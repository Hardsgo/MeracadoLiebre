const express = require('express');
const app = express();
const path = require('path')
// app.use('/static', express.static(__dirname + '/public'));

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3000, ()=>{
    console.log('Server is runing');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});