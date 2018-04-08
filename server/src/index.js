const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/routes')

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));

//serve static files - to directory!
app.use('/', express.static(path.resolve(__dirname, '../../client/')));

app.use('/api', routes)




app.get('*', (req, res) => res.status(404).send('This page does not exist'));

app.listen(3000, () => console.log('App listening on port 3000!'));
