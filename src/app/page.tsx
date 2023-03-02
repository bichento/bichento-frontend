import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { createClient } from 'contentful'

const inter = Inter({ subsets: ['latin'] })


async function getPets() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  })

  const res = await client.getEntries({
    content_type: 'pet'
  })

  return res.items
}

type Props = {
  pets: unknown[]
}

export default async function Home(props: any) {
  const pets = await getPets()

  console.log(pets)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
