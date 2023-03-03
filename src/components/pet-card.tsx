import { Pet } from "@/types"
import { Card, CardContent, Stack, SxProps, Tooltip, Typography } from "@mui/material"
import { Theme } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ContentCutIcon from '@mui/icons-material/ContentCut';

type Props = {
  pet: Pet,
  sx?: SxProps<Theme>
}

const PetCard = ({ pet, ...cardProps }: Props) => (
  <Link href={`/pets/${pet.sys.id}`} style={{ textDecoration: 'none' }}>
    <Card
      {...cardProps}
      sx={{
        ...cardProps.sx,
        position: 'relative',
      }}>
      <Image
        src={`https:${pet.fields.thumbnail.fields.file.url}`}
        alt={pet.fields.name}
        width={pet.fields.thumbnail.fields.file.details.image.width}
        height={pet.fields.thumbnail.fields.file.details.image.height}
        style={{ width: '100%', height: 400, objectFit: 'cover' }}
      // fill
      />
      <CardContent sx={{
        flexGrow: 1,
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(0, rgba(0, 0, 0, 0.6), transparent)',
        paddingTop: 2
      }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {pet.fields.gender && (
            pet.fields.gender === 'male' ? (
              <Tooltip title="Male" placement="top">
                <MaleIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Female" placement="top">
                <FemaleIcon />
              </Tooltip>
            )
          )}
          {pet.fields.castrated && (
            <Tooltip title="Castrated" placement="top">
              <ContentCutIcon />
            </Tooltip>
          )}
        </Stack>
        <Typography variant="h5" component="h2">
          {pet.fields.name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
)

export default PetCard
