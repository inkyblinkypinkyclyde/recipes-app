const express = require('express');
const app = express()

const cors = require('cors');
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('recipes_app'); // db name
        const cupboardCollection = db.collection('cupboard'); // collection name
        const recipeCollection = db.collection('recipes');
        const cupboardRouter = createRouter(cupboardCollection); // createRouter is a function that returns a router object
        const recipeRouter = createRouter(recipeCollection);
        app.use
        app.use('/api/cupboard', cupboardRouter); // http://localhost:9000/api/cupboard
    })
    .catch(console.err);

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});
