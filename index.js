const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/api/fullname', (req, res) => {

    let bd = req.body;

    let fullName = `My Fullname Is: ${bd.firstname} ${bd.lastname}`

    res.json({"fullname": fullName});
})

app.get('/api/greeting', (req, res) => {
    res.send({ "greetings": "Hello From Namiquipa!" });
})

app.listen(port, function () {
    console.log(`RESTFUL API LISTENING AT PORT ${port}`);
})