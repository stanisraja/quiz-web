// server.js
import express from 'express';
import { createConnection } from 'mysql2';
import cors from 'cors'; // For cross-origin requests
require('dotenv').config();

const app = express();
const port = 5000;

// Create a MySQL connection
const connection = createConnection({
  host: 'jolly-swipe.cy4h7sgs7wuj.us-east-1.rds.amazonaws.com',
  user: 'dataload',
  password: process.env.DB_PASSWORD,
  database: 'jolly-swipe',
  port: 3306
});

// Connect to the database
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Use CORS middleware
app.use(cors());

// Endpoint to get questions
app.get('/api/questions', (req, res) => {
  const sql = 'SELECT title, topic_type, option_1, option_2, option_3, option_4, currect_ans FROM topics WHERE category_id = 150 ORDER BY RAND() LIMIT 5'; // Get 5 random questions
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
