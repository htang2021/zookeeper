const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// const fs = require('fs');
// const path = require('path');

const express = require('express');
const { animals } = require('./data/animals');
const { zookeepers} = require('./data/zookeepers');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public')); // This needs to happen before the routes middleware.

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// functions here moved to server /lib/animals.js.

// routes here moved to animalRoutes.js

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});