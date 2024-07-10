// server.ts (Backend)
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'riles',
  host: 'localhost',
  database: 'riles',
  password: 'riles',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/awesome/applicant', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM applicant_info WHERE id = 1');
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.put('/awesome/applicant', async (req, res) => {
  const { name, fun_fact } = req.body;
  try {
    await pool.query(
      'UPDATE applicant_info SET name = $1, fun_fact = $2 WHERE id = 1',
      [name, fun_fact]
    );
    res.send('Applicant data updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
