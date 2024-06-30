import dotenv from 'dotenv';
import path from 'path';
const pathString = path.join(process.cwd(), '.env');
dotenv.config({ path: `${pathString}` });

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
