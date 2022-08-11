import { useMediaQuery, useTheme } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  leftDrawerSelector,
  setIsLeftDrawerOpen,
} from '../../features/LeftDrawer/leftDrawerSlice'
import LeftDrawerContent from './LeftDrawerContent'

const LeftDrawer = () => {
  const { isLeftDrawerOpen } = useAppSelector(leftDrawerSelector)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (matches) {
      dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: false }))
    }
  }, [matches])

  return (
    <Drawer
      anchor='left'
      open={isLeftDrawerOpen}
      onClose={() => dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: false }))}
    >
      <LeftDrawerContent />
    </Drawer>
  )
}

export default LeftDrawer
