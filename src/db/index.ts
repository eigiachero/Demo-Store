import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";
 
const connection = await mysql.createConnection({
    uri: process.env.DB_URL
});
 
export const db = drizzle(connection);

//await migrate(db, { migrationsFolder: "~/drizzle" });