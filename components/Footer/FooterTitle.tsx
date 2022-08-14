import { Typography } from '@mui/material'
import React from 'react'
import FooterTitleType from '../../@types/FooterTitleType'

const generateStyle = () => {
  return {
    titleStyle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      position: 'relative',
      display: 'inline-block',
      textTransform: 'uppercase',
      marginBottom: '40px',
      '&::after': {
        content: '""',
        position: 'absolute',
        height: '3px',
        width: '40%',
        backgroundColor: '#B09A68',
        bottom: '-8px',
        left: '0',
      },
    },
  }
}

const FooterTitle = ({ title }: FooterTitleType) => {
  const classes = generateStyle()

  return <Typography sx={classes.titleStyle}>{title}</Typography>
}

export default FooterTitle
