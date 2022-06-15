const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('look mama i can code node now!!!!!! i am from bangala')
});

const users = [
    {id:1, name: 'manir vai', email:'manir@.com', phone:'01756353625'},
    {id:2, name: 'karim vai', email:'karim@.com', phone:'01756353625'},
    {id:3, name: 'mahidan vai', email:'mahidan@.com', phone:'01756353625'},
    {id:4, name: 'manna vai', email:'mannar@.com', phone:'01756353625'},
]
app.get('/user', (req,res) =>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }else{
        res.send(users);
    }
    
});

app.get('/user/:idd', (req,res) =>{
    console.log(req.params);
    const id = parseInt(req.params.idd);
    // const id = req.params.idd;
    // const user = users[id];
    // const user = users.find(u => u.id == id);
    const user = users.find(u => u.id === id);
    res.send(user);

});

app.post('/user', (req,res) =>{
       console.log(req.body)
       const user = req.body;
       user.id = users.length + 1;
       users.push(user)
       res.send(user)
})

app.get('/fruits',(req,res) =>{
    res.send(['mango','apple','oranges','jukfruits']);
});

app.get('/fruits/mango/fazle', (req,res) =>{
    res.send(' am khaw moja pawo')
})

app.listen(port, () =>{
    console.log(' Listen port 5000', port)
})