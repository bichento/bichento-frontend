import { Gender } from "@/types"
import { Chip } from "@mui/material"

type Props = {
  castrated: boolean,
  size?: 'small' | 'medium'
}

const CastratedChip = ({ castrated, size = 'medium' }: Props) => {
  const label = castrated ? 'Castrated' : 'Not castrated'

  return (
    <Chip size={size} label={label} color="error" variant={castrated ? 'outlined' : 'filled'} />
  )
}

export default CastratedChip
