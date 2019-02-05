const express = require('express');
const mongoose = require('mongoose');

const users = require('./api/routes/users');
const profile = require('./api/routes/profile');
const posts = require('./api/routes/posts');

const app = express();

// Config Database
const db = require('./config/keys');

// Set up database
mongoose.connect(db.mongoURI)
		.then( () => console.log('Database succesfully connected'))
		.catch( (err) => console.log(err));

app.get('/', (req, res) => res.send('MERN-stack app with Brad Traversy'));

// Routes
app.use('/api/', profile);
app.use('/api/', users);
app.use('/api/', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));