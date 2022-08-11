import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  useTheme,
} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch } from '../../app/reduxHooks'
import { setIsLeftDrawerOpen } from '../../features/LeftDrawer/leftDrawerSlice'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import WebsiteLogo from '../WebsiteLogo/WebsiteLogo'
import navbarItems from '../../data/navbarItems'

const generateStyle = (theme: Theme) => {
  return {
    topContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      padding: '8px',
    },
    closeIconStyle: {
      color: 'red',
    },
    textStyle: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    arrowIconStyle: {
      color: theme.palette.primary.main,
    },
  }
}

const LeftDrawerContent = () => {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({})
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const classes = generateStyle(theme)

  const handleClick = (id: string) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  const closeButtonHandler = () => {
    dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: false }))
  }

  return (
    <Box sx={{ width: '250px' }}>
      <Box sx={classes.topContainerStyle}>
        <WebsiteLogo />
        <IconButton onClick={closeButtonHandler}>
          <CloseIcon sx={classes.closeIconStyle} />
        </IconButton>
      </Box>
      <List sx={{ width: '100%' }}>
        {navbarItems &&
          navbarItems.map((item) => (
            <Box key={item.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClick(item.id)}>
                  <ListItemText primary={item.title} sx={classes.textStyle} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
      </List>
    </Box>
  )
}

export default LeftDrawerContent
