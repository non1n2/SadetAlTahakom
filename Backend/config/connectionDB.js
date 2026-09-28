import pg from "pg";


export const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "sada-al-tahakom-website",
  password: process.env.PASSWORD_DB,
  port: 5432,
});


const connectionDB = async () => {
  try {
    await db.connect();
    console.log("PostgreSQL connected ");
  } catch (err) {
    console.error("DB error:", err.message);
  }
};


export default connectionDB ;