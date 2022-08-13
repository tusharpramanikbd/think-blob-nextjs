import {
  Avatar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const generateStyle = (matchesMD: boolean, matchesSM: boolean) => {
  return {
    containerStyle: {
      width: '100%',
      marginBottom: '16px',
      padding: !matchesSM ? '16px' : '10px',
      display: 'flex',
      flexDirection: !matchesSM ? 'row' : 'column',
      columnGap: '32px',
      boxShadow: 2,
      alignItems: 'center',
    },
    imageStyle: {
      display: 'block',
      width: !matchesMD ? '100%' : !matchesSM ? '30%' : '100%',
      height: !matchesSM ? '350px' : '175px',
      objectFit: 'cover',
    },
    dividerStyle: {
      width: '5px',
      height: '175px',
      background:
        'linear-gradient(0deg, rgba(245,241,234,1) 0%, rgba(176,154,104,1) 35%, rgba(176,154,104,1) 65%, rgba(245,241,234,1) 100%);',
      display: !matchesSM ? 'flex' : 'none',
    },
    blogInfoContainerStyle: {
      width: '100%',
      height: !matchesSM ? '350px' : '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    blogInfoInnerContainerStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      rowGap: !matchesSM ? '24px' : '6px',
    },
    titleStyle: {
      fontSize: !matchesSM ? '2rem' : '1.25rem',
      fontWeight: 'bold',
      marginTop: !matchesSM ? '0' : '8px',
    },
    userContentStyle: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: !matchesSM ? '16px' : '12px',
    },
    userInfoContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      columnGap: !matchesSM ? '16px' : '8px',
    },
    avaterStyle: {
      height: !matchesSM ? '48px' : '32px',
      width: !matchesSM ? '48px' : '32px',
    },
    userNameStyle: {
      fontSize: !matchesSM ? '1.25rem' : '1rem',
    },
    blogInfoStyle: {
      verticalAlign: 'middle',
      display: !matchesSM ? 'inline-flex' : 'none',
      fontSize: '0.85rem',
    },
    bottomBlogInfoStyle: {
      verticalAlign: 'middle',
      display: !matchesSM ? 'none' : 'inline-flex',
      fontSize: '0.85rem',
    },
    buttonContainerStyle: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonStyle: {
      width: '100%',
      border: '1px solid #B09A68',
      '&:hover': {
        backgroundColor: '#B09A68',
        color: 'white',
      },
    },
    descriptionTextStyle: {
      color: '#B09A68',
    },
  }
}

const BlogItem = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesMD, matchesSM)

  return (
    <Box sx={classes.containerStyle}>
      {/* Image */}
      <Box
        sx={classes.imageStyle}
        component='img'
        alt='Header Image'
        src='https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />

      {/* Divider */}
      <Box sx={classes.dividerStyle}></Box>

      {/* Blog Information Section */}
      <Box sx={classes.blogInfoContainerStyle}>
        <Box sx={classes.blogInfoInnerContainerStyle}>
          <Typography sx={classes.titleStyle}>
            This is the blog title
          </Typography>
          <Typography sx={classes.descriptionTextStyle}>
            {matchesSM
              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.'
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </Typography>
        </Box>
        <Box sx={classes.userContentStyle}>
          <Box sx={classes.userInfoContainerStyle}>
            <Avatar alt='Cindy Baker' src='' sx={classes.avaterStyle} />
            <Box>
              <Typography sx={classes.userNameStyle}>
                Tushar Pramanik
              </Typography>
              <Typography sx={classes.blogInfoStyle}>
                <ThumbUpIcon
                  sx={{ marginRight: '8px', height: '20px', width: '20px' }}
                />{' '}
                1k &middot; 21st Sep, 2022 &middot; React &middot; 10 min read
              </Typography>
            </Box>
          </Box>
          <Typography sx={classes.bottomBlogInfoStyle}>
            <ThumbUpIcon
              sx={{ marginRight: '8px', height: '20px', width: '20px' }}
            />{' '}
            1k &middot; 21st Sep, 2022 &middot; React &middot; 10 min read
          </Typography>

          <Box sx={classes.buttonContainerStyle}>
            <Button sx={classes.buttonStyle} variant='outlined'>
              Read more
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BlogItem
