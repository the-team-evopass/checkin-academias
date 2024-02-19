import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';

interface SliceLoadingProps {
  isLoading: boolean;
}

const INITIAL_STATE: SliceLoadingProps = {
  isLoading: false
};

// eslint-disable-next-line react-refresh/only-export-components
const sliceLoading = createSlice({
  name: 'sliceLoading',
  initialState: INITIAL_STATE,
  reducers: {
    changeStateIsloading(state: Draft<SliceLoadingProps>, { payload }: PayloadAction<SliceLoadingProps>) {
      state.isLoading = payload.isLoading;
    }
  },
});

export default sliceLoading.reducer;
export const { changeStateIsloading } = sliceLoading.actions;

export const useIsLoading = (state: { stateIsLoading: SliceLoadingProps[] }) => {
  return state.stateIsLoading;
};