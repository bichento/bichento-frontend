import CastratedChip from "@/components/castrated-chip"
import GenderChip from "@/components/gender-chip"
import PetCard from "@/components/pet-card"
import SpecieChip from "@/components/specie-chip"
import { Pet } from "@/types"
import { Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import { createClient } from "contentful"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

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
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await client.getEntry<Pet>(params?.id as string)

    return {
      props: {
        pet: res
      },
      revalidate: 1,
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

type Props = {
  pet: Pet
}

const PetPage = ({ pet }: Props) => {
  console.log(pet)

  if (!pet) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h1">{pet.fields.name}</Typography>
          <Image
            src={`https:${pet.fields.thumbnail.fields.file.url}`}
            alt={pet.fields.name}
            width={pet.fields.thumbnail.fields.file.details.image.width}
            height={pet.fields.thumbnail.fields.file.details.image.height}
            style={{ width: '100%', height: 250, objectFit: 'cover' }}
          // fill
          />
          {pet.fields.description && (
            <ReactMarkdown>{pet.fields.description}</ReactMarkdown>
          )}
          <Stack direction="row" spacing={1}>
            {pet.fields.specie && <SpecieChip specie={pet.fields.specie} />}
            {pet.fields.gender && <GenderChip gender={pet.fields.gender} />}
            {pet.fields.castrated !== undefined && <CastratedChip castrated={pet.fields.castrated} />}
          </Stack>
        </Container>
      </Box>
    </main>
  )
}

export default PetPage
