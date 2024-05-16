import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckinProps {
  idUser: number;
  image: string;
  isChecked: boolean;
  name: string;
  time: string;
}

const INITIAL_STATE: CheckinProps[] = [];

const sliceCheckin = createSlice({
  name: 'checkin',
  initialState: INITIAL_STATE,
  reducers: {
    addCheckin(state, { payload }: PayloadAction<CheckinProps>) {
      if (state.some(objeto => objeto.idUser === payload.idUser)) {
        console.log('Id user repetido');
      } else {
        return [payload]
      }
    }
  }
});

export default sliceCheckin.reducer;
export const { addCheckin } = sliceCheckin.actions;

export const useCheckins = (state: { checkinList: CheckinProps[] }) => {
  return state.checkinList;
};