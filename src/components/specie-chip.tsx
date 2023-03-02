import { Specie } from "@/types"
import { Chip } from "@mui/material"

type Props = {
  specie: Specie,
  size?: 'small' | 'medium'
}

const copyBySpecie: { [specie in Specie]: string } = {
  dog: 'Dog',
  cat: 'Cat'
}

const SpecieChip = ({ specie, size = 'medium' }: Props) => (
  <Chip size={size} color="warning" label={copyBySpecie[specie]} variant="outlined" />
)

export default SpecieChip
