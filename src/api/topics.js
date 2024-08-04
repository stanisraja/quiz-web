import { createConnection } from 'mysql2/promise';

const connectionConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306
};

console.log(connectionConfig.user)
async function topics(req, res) {
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

export default topics;


