import { Pet } from "@/types"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

type Props = {
  pet: Pet
}

const PetCard = ({ pet }: Props) => (
  <Link href={`/pets/${pet.sys.id}`}>
    <Card>
      {/* <CardMedia sx={{ height: 140 }} image={pet.fields.thumbnail.fields.file.url} title={pet.fields.name} /> */}
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
    </Card>
  </Link>
)

export default PetCard
