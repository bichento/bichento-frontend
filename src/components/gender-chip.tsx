import { Gender } from "@/types"
import { Chip } from "@mui/material"
import { ReactElement } from "react"
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

type Props = {
  gender: Gender,
  size?: 'small' | 'medium'
}

const copyByGender: { [gender in Gender]: string } = {
  male: 'Male',
  female: 'Female'
}

const iconByGender: { [gender in Gender]: ReactElement } = {
  male: <MaleIcon />,
  female: <FemaleIcon />
}

const GenderChip = ({ gender, size = 'medium' }: Props) => (
  <Chip size={size} color="info" icon={iconByGender[gender]} label={copyByGender[gender]} variant="outlined" />
)

export default GenderChip
