const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());




// run().catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Flytographer  server is running')
})

app.listen(port, () => {
    console.log(`Flytographer  server running on ${port}`);
})