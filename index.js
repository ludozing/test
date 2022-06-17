const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const { User } = require('./User');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://progman:kan20190215@35.161.146.18:27017/remedy-db', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error));

app.get('/', (req, res)=>{
    const users = await User.find({});
    try {
        return res.status(200).json(users)
    } catch(e) {return res.status(522).json({no: e})}
});

app.listen(port, ()=>console.log(`서버 포트 ${port}`))