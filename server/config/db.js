import postgres from 'postgres';
import env from "dotenv";
env.config();

const DATABASE_URL = process.env.NODE_ENV == "development" ? process.env.DATABASE_URL_DEV : process.env.PROD;
const sql =  process.env.NODE_ENV == "development" ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: "require" }); // will use psql environment variables

export default sql;