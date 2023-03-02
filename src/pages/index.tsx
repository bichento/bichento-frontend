import PetCard from '@/components/pet-card'
import { Pet } from '@/types'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { createClient, Entry } from 'contentful'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
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
    },
    revalidate: 1
  }
}

type Props = {
  pets: Pet[]
}

export default function Home({ pets }: Props) {
  console.log(pets)

  return (
    // <div>
    //   <h1>Home</h1>
    //   {pets.map(pet => (
    //     <PetCard key={pet.sys.id} pet={pet} />
    //   ))}
    // </div>
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Bichento
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Pets para adoção.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {pets.map((pet) => (
            <Grid item key={pet.sys.id} xs={12} sm={6} md={4}>
              <PetCard key={pet.sys.id} pet={pet} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}
