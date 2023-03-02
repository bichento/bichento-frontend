import { Pet } from "@/types"
import { Button, Card, CardActions, CardContent, SxProps, Typography } from "@mui/material"
import { Theme } from "@mui/system"
import Image from "next/image"

type Props = {
  pet: Pet,
  sx?: SxProps<Theme>
}

const PetCard = ({ pet, ...cardProps }: Props) => (
  <Card {...cardProps}>
    {/* <Card>
      <div style={{ width: 140, height: 140 }}>
        <Image
          src={`https:${pet.fields.thumbnail.fields.file.url}`}
          alt={pet.fields.name}
          width={140}
          height={140}
        // fill
        />
      </div>
      <CardContent>
        <Typography variant="h5" component="div">{pet.fields.name}</Typography>
      </CardContent>
    </Card> */}
    {/* <CardMedia
      component="img"
      sx={{
        // 16:9
        pt: '56.25%',
      }}
      image="https://source.unsplash.com/random"
      alt="random"
    /> */}
    <Image
      src={`https:${pet.fields.thumbnail.fields.file.url}`}
      alt={pet.fields.name}
      width={pet.fields.thumbnail.fields.file.details.image.width}
      height={pet.fields.thumbnail.fields.file.details.image.height}
      style={{ width: '100%', height: 250, objectFit: 'cover' }}
    // fill
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {pet.fields.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={`/pets/${pet.sys.id}`}>View</Button>
      {/* <Button size="small">Edit</Button> */}
    </CardActions>
  </Card>
)

export default PetCard
