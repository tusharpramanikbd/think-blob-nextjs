import { Typography } from '@mui/material'
import React from 'react'

const generateStyle = () => {
  return {
    logoStyle: {
      backgroundColor: '#B09A68',
      color: 'white',
      padding: '8px',
      marginRight: '4px',
    },
  }
}

const WebsiteLogo = () => {
  const classes = generateStyle()
  return (
    <Typography variant='h6' component='span'>
      <Typography variant='h6' component='span' sx={classes.logoStyle}>
        THINK
      </Typography>
      BLOB
    </Typography>
  )
}

export default WebsiteLogo
