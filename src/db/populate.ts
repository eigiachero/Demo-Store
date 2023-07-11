import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { products as prods } from "../../public/demoImages/products"

import 'dotenv/config'
import { products } from "./schema";
const populate = async () => {
    if (!process.env.DB_URL) {
        throw new Error('DB_URL is not defined')
    }

    const connection = await mysql.createConnection({
        uri: process.env.DB_URL
    });
        
    const db = drizzle(connection);

    console.log('⏳ Creating database entrys...')
    const start = Date.now()

    await db.insert(products).values(prods)

    const end = Date.now()
    console.log(`✅ Completed in ${end - start}ms`)

    process.exit(0)
}

populate().catch((err) => {
  console.error('❌ Migration failed')
  console.error(err)
  process.exit(1)
})
