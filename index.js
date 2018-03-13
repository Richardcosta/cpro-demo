const express = require('express')
const app = express();

app.use('/', express.static(__dirname + '/front-angular/dist'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/front-angular/dist/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        return console.log('error connection');
    }
    console.log('Connected');
})