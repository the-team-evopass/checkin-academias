import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceUserInfosProps {
    loggedInUserToken: string;
    userPhotoURL: string;
    userUID: string;
}

const INITIAL_STATE: SliceUserInfosProps = {
    loggedInUserToken: "",
    userPhotoURL: "",
    userUID: ""
};

const sliceUserInfos = createSlice({
    name: 'userInfos',
    initialState: INITIAL_STATE,
    reducers: {
        addUserInfos(state, action: PayloadAction<SliceUserInfosProps>) {

            const { loggedInUserToken, userPhotoURL, userUID } = action.payload;
            state.loggedInUserToken = loggedInUserToken;
            state.userPhotoURL = userPhotoURL;
            state.userUID = userUID;
        }
    },
});

export default sliceUserInfos.reducer;
export const { addUserInfos } = sliceUserInfos.actions;

export const useUserInfos = (state: { stateUserInfos: SliceUserInfosProps }) => {
    return state.stateUserInfos;
};