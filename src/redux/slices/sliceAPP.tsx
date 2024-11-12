import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';

export interface SliceAppState {
  isLoading: boolean;
  isLogged: boolean | null;
  isNotificationBarActivated: boolean
}

const INITIAL_STATE: SliceAppState = {
  isLoading: false,
  isLogged: null,
  isNotificationBarActivated: true,
};

const sliceAPP = createSlice({
  name: 'sliceAPP',
  initialState: INITIAL_STATE,
  reducers: {
    changeStateIsloading(state: Draft<SliceAppState>, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    changeStateIsLogged(state: Draft<SliceAppState>, { payload }: PayloadAction<boolean>) {
      state.isLogged = payload;
    },
    changeStateIsNotificationBarActivated(state: Draft<SliceAppState>, { payload }: PayloadAction<boolean>) {
      state.isNotificationBarActivated = payload;
    },
  },
});

export default sliceAPP.reducer;
export const { changeStateIsloading, changeStateIsLogged, changeStateIsNotificationBarActivated } = sliceAPP.actions;