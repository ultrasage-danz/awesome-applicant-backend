import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const pool = new Pool({
  user: 'riles',
  host: 'localhost',
  database: 'riles',
  password: 'riles',
  port: 5432,
});

app.get('/awesome/applicant', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM applicant_info LIMIT 1');
    const applicantInfo = result.rows[0];
    res.json(applicantInfo);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app; // Export app for testing purposes
