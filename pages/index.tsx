import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  })

  const res = await client.getEntries({
    content_type: 'pet'
  })

  return {
    props: {
      pets: res.items
    }
  }
}

type Props = {
  pets: unknown[]
}

export default function Home(props: any) {
  console.log(props.pets)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
