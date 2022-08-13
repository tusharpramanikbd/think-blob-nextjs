import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import TrendingBlog from './TrendingBlog'

const generateStyle = (matchesSM: boolean) => {
  return {
    containerStyle: {
      width: '100%',
      padding: matchesSM ? '32px 16px' : '32px 0',
    },
    sectionHeadingStyle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '32px',
      paddingLeft: '16px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        backgroundColor: '#B09A68',
        height: '100%',
        width: '5px',
        left: '0',
        top: '0',
      },
    },
    trendingBlogsContainerStyle: {
      display: 'flex',
      flexWrap: !matchesSM ? 'nowrap' : 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      columnGap: '8px',
      rowGap: !matchesSM ? '0' : '8px',
    },
    trendingBlogsContainerLeftStyle: {
      width: '100%',
      height: !matchesSM ? '28rem' : 'calc(14rem - 4px)',
    },
    trendingBlogsContainerRightStyle: {
      width: '100%',
      height: '28rem',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
    },
    trendingBlogsItemStyle: {
      width: '100%',
      height: '100%',
    },
    imageStyle: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  }
}

const TrendingBlogsSection = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesSM)

  return (
    <Box>
      <Container sx={classes.containerStyle}>
        <Typography sx={classes.sectionHeadingStyle}>Trending Blogs</Typography>
        <Box sx={classes.trendingBlogsContainerStyle}>
          <Box sx={classes.trendingBlogsContainerLeftStyle}>
            <TrendingBlog
              size='big'
              imgUrl='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
          </Box>
          <Box sx={classes.trendingBlogsContainerRightStyle}>
            <TrendingBlog
              size='small'
              imgUrl='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
            <TrendingBlog
              size='small'
              imgUrl='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TrendingBlogsSection
