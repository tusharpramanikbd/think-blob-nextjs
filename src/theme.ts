import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#B09A68',
      light: '#F0EADB',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
})

export default theme
