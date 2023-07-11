import { boolean, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';
 
export const users = mysqlTable('users', {
  id: varchar('id', { length: 256 }).primaryKey(),
  fullName: text('full_name'),

});

export const products = mysqlTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  description: text('description'),
  photoURL: varchar('photo', { length: 256 }),
})
 
export type User = InferModel<typeof users>; 
export type Product = InferModel<typeof products>;