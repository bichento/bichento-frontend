import PetCard from "@/components/pet-card"
import { Pet } from "@/types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { createClient } from "contentful"
import { GetStaticPaths, GetStaticProps } from "next"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
})

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<Pet>({
    content_type: 'pet'
  })

  return {
    paths: res.items.map(pet => ({
      params: {
        id: pet.sys.id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await client.getEntry<Pet>(params?.id as string)

  return {
    props: {
      pet: res
    },
    revalidate: 1,
  }
}

type Props = {
  pet: Pet
}

const PetPage = ({ pet }: Props) => {
  console.log(pet)
  return (
    <div>
      <h1>Pet</h1>
      <PetCard pet={pet} />
      {/* {documentToReactComponents(pet.fields.description)} */}
    </div>
  )
}

export default PetPage
