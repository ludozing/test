const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.get('/', (req, res)=>{
    try {
        return res.status(200).json({hi: '안녕'})
    } catch(e) {return res.status(500).json({error: e})}
});

app.listen(port, ()=>console.log(`서버 포트 ${port}`))