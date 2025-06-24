const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Connect to DB
connectDB();

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/posts', require('./routes/postRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
