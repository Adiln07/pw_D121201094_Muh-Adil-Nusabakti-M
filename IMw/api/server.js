const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connected to DB"))
.catch(console.error);

//utk start: npm start




app.listen(3001, () => console.log("server started on port 3001"));