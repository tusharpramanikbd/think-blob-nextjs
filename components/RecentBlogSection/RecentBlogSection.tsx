import {
  Box,
  Container,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import blogPosts from '../../data/blogPosts'
import BlogItem from '../BlogItem/BlogItem'

const generateStyle = (matchesSM: boolean) => {
  return {
    containerStyle: {
      width: '100%',
      padding: matchesSM ? '32px 16px' : '32px 0',
    },
    sectionHeadingStyle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '40px',
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
    paginationContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '32px',
    },
  }
}

const RecentBlogSection = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesSM)

  return (
    <Box>
      <Container sx={classes.containerStyle}>
        <Typography sx={classes.sectionHeadingStyle}>Recent Blogs</Typography>
        {blogPosts.map((item) => (
          <BlogItem key={item.id} />
        ))}
        <Box sx={classes.paginationContainerStyle}>
          <Pagination
            count={10}
            variant='outlined'
            shape='rounded'
            color='primary'
          />
        </Box>
      </Container>
    </Box>
  )
}

export default RecentBlogSection
