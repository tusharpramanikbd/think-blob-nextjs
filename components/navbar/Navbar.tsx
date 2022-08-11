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
import navbarItems from '../../data/navbarItems'
import WebsiteLogo from '../WebsiteLogo/WebsiteLogo'
import { useAppDispatch } from '../../app/reduxHooks'
import { setIsLeftDrawerOpen } from '../../features/LeftDrawer/leftDrawerSlice'

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
  const dispatch = useAppDispatch()

  const menuIconClickHandler = () => {
    dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: true }))
  }

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar sx={classes.rootContainerStyle}>
          <Toolbar>
            <Container sx={classes.containerStyle}>
              <WebsiteLogo />
              <Box>
                <ul style={classes.listStyle}>
                  {navbarItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.path}>
                        <MuiLink
                          sx={
                            router.pathname == item.path
                              ? [classes.linkStyle, classes.activeLinkStyle]
                              : classes.linkStyle
                          }
                          underline='none'
                        >
                          {item.title}
                        </MuiLink>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <CustomInvisibleIconButton onClick={menuIconClickHandler}>
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
