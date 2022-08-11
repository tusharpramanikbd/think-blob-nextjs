import {
  Box,
  Button,
  Container,
  createTheme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'

const generateStyle = (matchesMD: boolean, matchesSM: boolean) => {
  return {
    rootContainerStyle: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F0EADB',
      paddingTop: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerStyle: {
      display: 'flex',
      flexDirection: !matchesMD ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: !matchesSM ? '80%' : '100%',
    },
    textContentStyle: {
      backgroundColor: 'white',
      padding: !matchesSM ? '40px' : '24px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
      order: !matchesMD ? '1' : '2',
    },
    headingStyle: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    headingSpanStyle: {
      color: '#B09A68',
    },
    textStyle: {
      fontWeight: '500',
    },
    buttonContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: !matchesMD ? 'flex-start' : 'center',
      columnGap: '24px',
      marginTop: '16px',
    },
    buttonStyle: {
      color: 'white',
      textTransform: 'none',
    },
    imageStyle: {
      display: 'block',
      width: !matchesMD ? '26rem' : '100%',
      height: !matchesMD ? '30rem' : '25rem',
      objectFit: 'cover',
      order: !matchesMD ? '2' : '1',
    },
  }
}

export default function Home() {
  const theme = createTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesMD, matchesSM)

  return (
    <Box sx={classes.rootContainerStyle}>
      <Container sx={classes.containerStyle}>
        <Box sx={classes.textContentStyle}>
          <Typography sx={classes.headingStyle}>
            Welcome to{' '}
            <Typography
              sx={[classes.headingStyle, classes.headingSpanStyle]}
              component='span'
            >
              Think Blob
            </Typography>
          </Typography>
          <Typography sx={classes.textStyle}>
            This is the place where you think and express yourself for others
            betterment. This site mainly focusses the different topics and
            technologies on web development which you can write about. It will
            help yourself as well as others.{' '}
          </Typography>
          <Box sx={classes.buttonContainerStyle}>
            <Button sx={classes.buttonStyle} variant='contained'>
              Start Reading
            </Button>
            <Button sx={classes.buttonStyle} variant='contained'>
              Start Writing
            </Button>
          </Box>
        </Box>
        <Box
          sx={classes.imageStyle}
          component='img'
          alt='Header Image'
          src='https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </Container>
    </Box>
  )
}
