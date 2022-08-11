import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export interface LeftDrawerStateModel {
  isLeftDrawerOpen: boolean
}

export const initialState: LeftDrawerStateModel = {
  isLeftDrawerOpen: false,
}

const leftDrawerSlice = createSlice({
  name: 'leftDrawer',
  initialState,
  reducers: {
    setIsLeftDrawerOpen: (
      state,
      action: PayloadAction<LeftDrawerStateModel>
    ) => {
      state.isLeftDrawerOpen = action.payload.isLeftDrawerOpen
    },
  },
})

export const { setIsLeftDrawerOpen } = leftDrawerSlice.actions

export const leftDrawerSelector = (state: RootState) => state.leftDrawer

export default leftDrawerSlice.reducer
