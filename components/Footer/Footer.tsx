import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import navbarItems from '../../data/navbarItems'
import FooterTitle from './FooterTitle'
import MuiLink from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RssFeedIcon from '@mui/icons-material/RssFeed'

const generateStyle = (matchesSM: boolean) => {
  return {
    rootContainerStyle: {
      width: '100%',
      backgroundColor: '#F0EADB',
    },
    containerStyle: {
      padding: !matchesSM ? '64px 0 56px 0' : '64px 16px 56px 16px',
    },
    listStyle: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
    },
    linkStyle: {
      color: 'black',
      cursor: 'pointer',
      '&:hover': {
        color: '#B09A68',
      },
    },
    inputStyle: {
      width: '100%',
      height: '40px',
      paddingLeft: '12px',
      border: '1px solid #B09A68',
      marginBottom: '16px',
    },
    buttonStyle: {
      width: '100%',
      color: 'white',
      textTransform: 'none',
    },
    iconContainerStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      columnGap: '12px',
    },
    iconStyle: {
      '&:hover': {
        color: '#B09A68',
        cursor: 'pointer',
      },
    },
    copyrightSectionStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '32px',
    },
    copyrightTextStyle: {
      fontSize: '1.rem',
      fontWeight: '500',
    },
  }
}

const Footer = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(matchesSM)
  const currentYear = new Date().getFullYear()

  return (
    <Box sx={classes.rootContainerStyle}>
      <Container sx={classes.containerStyle}>
        {/* Top Section */}
        <Grid
          container
          columnSpacing={{ xs: 4, sm: 10 }}
          rowSpacing={{ xs: 4, lg: 0 }}
        >
          <Grid item xs={6} md={6} lg={3}>
            <FooterTitle title='About us' />
            <Typography>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <FooterTitle title='useful links' />
            <Box sx={classes.listStyle}>
              {navbarItems.map((item) => (
                <Link key={item.id} href={item.path}>
                  <MuiLink underline='none' sx={classes.linkStyle}>
                    {item.title}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <FooterTitle title='subscribe us' />
            <input
              type='text'
              placeholder='Your Email...'
              style={classes.inputStyle}
            />
            <Button sx={classes.buttonStyle} variant='contained'>
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <FooterTitle title='follow us' />
            <Box sx={classes.iconContainerStyle}>
              <FacebookIcon sx={classes.iconStyle} />
              <TwitterIcon sx={classes.iconStyle} />
              <InstagramIcon sx={classes.iconStyle} />
              <YouTubeIcon sx={classes.iconStyle} />
              <RssFeedIcon sx={classes.iconStyle} />
            </Box>
          </Grid>
        </Grid>
        {/* End of Top Section */}

        {/* Bottom Section */}
        <Box sx={classes.copyrightSectionStyle}>
          <Typography sx={classes.copyrightTextStyle}>
            Copyright &copy; {currentYear} ThinkBlob
          </Typography>
        </Box>
        {/* End of Bottom Section */}
      </Container>
    </Box>
  )
}

export default Footer
