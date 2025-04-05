const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PORT =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Static files
app.use(express.static('public'));


const roomcode = require('./routes/roomcode');
const result = require('./routes/result');
const roomtype = require('./routes/roomtype');
app.use('/roomcode', roomcode);
app.use('/result', result);
app.use('/roomtype',roomtype);



// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Ludoking Unoffical!');
});

// Error handling
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
