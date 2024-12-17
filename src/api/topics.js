import { createConnection } from 'mysql2/promise';

console.log('API route hit:', req.url);

const connectionConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306
};


export default async function handler(req, res) {
  let connection;
  try {
    connection = await createConnection(connectionConfig);
    const [rows] = await connection.execute('SELECT NAME FROM `jolly-swipe`.categories ORDER BY RAND() LIMIT 5');
    
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}