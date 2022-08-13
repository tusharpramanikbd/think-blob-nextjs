import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import TrendingBlogType from '../../@types/TrendingBlogType'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const generateStyle = (
  imgUrl: string | null,
  size: string,
  matchesSM: boolean
) => {
  return {
    outerRootContainerStyle: {
      overflow: 'hidden',
      width: '100%',
      height: 'inherit',
      position: 'relative',
    },
    rootContainerStyle: {
      width: '100%',
      height: 'inherit',
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all 0.9s ease-in-out',
      '&:hover': {
        transform: 'scale(1.5,1.5)',
      },
    },
    titleStyle: {
      fontSize: matchesSM ? '1.3rem' : size === 'big' ? '1.5rem' : '1.3rem',
      fontWeight: '500',
      position: 'absolute',
      top: matchesSM ? '10px' : size === 'big' ? '20px' : '10px',
      left: matchesSM ? '10px' : size === 'big' ? '20px' : '10px',
    },
    userContentStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: '16px',
      position: 'absolute',
      bottom: matchesSM ? '10px' : size === 'big' ? '20px' : '10px',
      left: matchesSM ? '10px' : size === 'big' ? '20px' : '10px',
    },
    blogInfoStyle: {
      verticalAlign: 'middle',
      display: 'inline-flex',
      fontSize: matchesSM ? '0.75rem' : size === 'big' ? '0.85rem' : '0.75rem',
    },
    textColor: {
      color: '#c1a76e',
    },
    userNameStyle: {
      fontSize: matchesSM ? '1rem' : size === 'big' ? '1.25rem' : '1rem',
    },
    avaterStyle: {
      height: matchesSM ? '42px' : size === 'big' ? '48px' : '42px',
      width: matchesSM ? '42px' : size === 'big' ? '48px' : '42px',
    },
  }
}

const TrendingBlog = ({ imgUrl, size }: TrendingBlogType) => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(imgUrl, size, matchesSM)
  return (
    <Box sx={classes.outerRootContainerStyle}>
      <Box sx={classes.rootContainerStyle}></Box>
      <Typography sx={[classes.titleStyle, classes.textColor]}>
        This is the trending blog title
      </Typography>
      <Box sx={classes.userContentStyle}>
        <Avatar alt='Cindy Baker' src='' sx={classes.avaterStyle} />
        <Box>
          <Typography sx={[classes.userNameStyle, classes.textColor]}>
            Tushar Pramanik
          </Typography>
          <Typography sx={[classes.blogInfoStyle, classes.textColor]}>
            <ThumbUpIcon
              sx={{ marginRight: '8px', height: '20px', width: '20px' }}
            />{' '}
            1k &middot; 21st Sep, 2022 &middot; React &middot; 10 min read
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TrendingBlog
