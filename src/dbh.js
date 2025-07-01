import { Pool } from "pg";

let pool;

if (!global._pgPool) {
    global._pgPool = new Pool({
        connectionString: process.env.Fiuzar_DATABASE_URL,
        // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
        ssl: {
            rejectUnauthorized: false,
        },
        max: 10,
        idleTimeoutMillis: 60000,
        connectionTimeoutMillis: 10000,
    });
}

pool = global._pgPool;

const query = (text, params) => pool.query(text, params);

export  { query, pool };