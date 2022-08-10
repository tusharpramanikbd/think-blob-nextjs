import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import {
  createTheme,
  IconButton,
  styled,
  Theme,
  useMediaQuery,
} from '@mui/material'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/router'

interface Props {
  children?: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const generateStyle = (matchesMD: boolean) => {
  return {
    rootContainerStyle: {
      backgroundColor: 'white',
      borderBottom: '1px solid black',
    },
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoStyle: {
      backgroundColor: '#B09A68',
      color: 'white',
      padding: '8px',
      marginRight: '4px',
    },
    listStyle: {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
      columnGap: '32px',
    },
    linkStyle: {
      color: 'black',
      display: matchesMD ? 'none' : 'inherit',
      cursor: 'pointer',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        backgroundColor: '#B09A68',
        height: '3px',
        width: '0',
        left: '0',
        bottom: '-5px',
        transition: '0.3s',
      },
      '&:hover::after': {
        width: '100%',
      },
      '&:hover': {
        color: '#B09A68',
      },
    },
    activeLinkStyle: {
      color: '#B09A68',
      display: matchesMD ? 'none' : 'inherit',
      cursor: 'pointer',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        backgroundColor: '#B09A68',
        height: '3px',
        width: '100%',
        left: '0',
        bottom: '-5px',
        transition: '0.3s',
      },
    },
    menuIconStyle: {
      color: '#B09A68',
      width: '32px',
      height: '32px',
    },
  }
}

const CustomInvisibleIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
    marginLeft: '0',
  },
}))

const Navbar = (props: Props) => {
  const router = useRouter()
  const theme = createTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const classes = generateStyle(matchesMD)
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar sx={classes.rootContainerStyle}>
          <Toolbar>
            <Container sx={classes.containerStyle}>
              <Typography variant='h6' component='span'>
                <Typography
                  variant='h6'
                  component='span'
                  sx={classes.logoStyle}
                >
                  THINK
                </Typography>
                BLOB
              </Typography>
              <Box>
                <ul style={classes.listStyle}>
                  <li>
                    <Link href='/'>
                      <MuiLink
                        sx={
                          router.pathname == '/'
                            ? [classes.linkStyle, classes.activeLinkStyle]
                            : classes.linkStyle
                        }
                        underline='none'
                      >
                        Home
                      </MuiLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/categories'>
                      <MuiLink
                        sx={
                          router.pathname == '/categories'
                            ? [classes.linkStyle, classes.activeLinkStyle]
                            : classes.linkStyle
                        }
                        underline='none'
                      >
                        Categories
                      </MuiLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/aboutUs'>
                      <MuiLink
                        sx={
                          router.pathname == '/aboutUs'
                            ? [classes.linkStyle, classes.activeLinkStyle]
                            : classes.linkStyle
                        }
                        underline='none'
                      >
                        About Us
                      </MuiLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/login'>
                      <MuiLink
                        sx={
                          router.pathname == '/login'
                            ? [classes.linkStyle, classes.activeLinkStyle]
                            : classes.linkStyle
                        }
                        underline='none'
                      >
                        Login
                      </MuiLink>
                    </Link>
                  </li>
                  <li>
                    <CustomInvisibleIconButton>
                      <MenuIcon sx={classes.menuIconStyle} />
                    </CustomInvisibleIconButton>
                  </li>
                </ul>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}

export default Navbar
