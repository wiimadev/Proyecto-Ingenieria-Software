
import { createPool } from "mysql2/promise";

export const  pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Wimm0105?',
    database: 'ingenieria'
})