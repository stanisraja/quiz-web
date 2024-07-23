import { createConnection } from 'mysql2/promise';

const connectionConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306
};

async function fetchData(req, res) {
  let connection;
  try {
    connection = await createConnection(connectionConfig);
    const [rows] = await connection.execute('SELECT title, option_1, option_2, option_3, option_4, currect_ans FROM `jolly-swipe`.topics WHERE category_id = 150 ORDER BY RAND() LIMIT 5');
    
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

export default fetchData;
