const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moviesRouter = require('./routes/movies');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Movies API');
});

// Routes
app.use('/api/movies', moviesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
