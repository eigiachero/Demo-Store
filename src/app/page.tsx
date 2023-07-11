import { db } from '@/db'
import { products } from '@/db/schema'

import Image from 'next/image'

export default async function Home() {
  const prod_list = await db.select().from(products)
  
  return (
    <main>
      <h1>Demo store</h1>
      {prod_list && prod_list.map(prod => (
        <div key={prod.id}>
          <h1>{prod.name}</h1>
          <Image src={`/${prod.photoURL}`} alt={prod.name} width={300} height={300}/>
        </div>
      ))}
    </main>
  )
}
