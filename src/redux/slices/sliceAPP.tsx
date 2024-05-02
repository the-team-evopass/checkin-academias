import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';

export interface SliceAppState {
  isLoading: boolean;
  isLogged: boolean | null;
}

const INITIAL_STATE: SliceAppState = {
  isLoading: false,
  isLogged: null,
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
  },
});

export default sliceAPP.reducer;
export const { changeStateIsloading, changeStateIsLogged } = sliceAPP.actions;