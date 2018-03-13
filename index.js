const express = require('express')



const app = express();

app.get('*', (req, res) => {
    res.send('Coucou la demon')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        return console.log('error connection');
    }
    console.log('Connected');
})