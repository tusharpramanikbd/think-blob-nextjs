import { combineReducers } from '@reduxjs/toolkit'
import leftDrawerReducer from '../features/LeftDrawer/leftDrawerSlice'

const rootReducer = combineReducers({
  leftDrawer: leftDrawerReducer,
})

export default rootReducer
