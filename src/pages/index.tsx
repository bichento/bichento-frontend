import PetCard from '@/components/pet-card'
import { Pet } from '@/types'
import { createClient, Entry } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  })

  const res = await client.getEntries<Pet>({
    content_type: 'pet'
  })

  return {
    props: {
      pets: res.items
    }
  }
}

type Props = {
  pets: Pet[]
}

export default function Home({ pets }: Props) {
  console.log(pets)

  return (
    <div>
      <h1>Home</h1>
      {pets.map(pet => (
        <PetCard key={pet.sys.id} pet={pet} />
      ))}
    </div>
  )
}
