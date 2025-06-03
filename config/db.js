import dotenv from 'dotenv';
import pq from 'pg';
const {Pool} = pq;

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export default pool;