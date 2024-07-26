import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TicketGateConfigurationProps {
    way: string;
    ticketGateIP: string;
    ticketGatePort: number
}

interface SliceUserInfosProps {
    userName: string
    loggedInUserToken: string;
    userPhotoURL: string;
    userUID: string;
    internalID: string
    ticketGateConfiguration: TicketGateConfigurationProps
}

const INITIAL_STATE: SliceUserInfosProps = {
    userName: '',
    loggedInUserToken: '',
    userPhotoURL: '',
    userUID: '',
    internalID: '',
    ticketGateConfiguration: {
        way: '',
        ticketGateIP:'',
        ticketGatePort: 0,
    }
}

const sliceUserInfos = createSlice({
    name: 'userInfos',
    initialState: INITIAL_STATE,
    reducers: {
        addUserInfos(state, action: PayloadAction<SliceUserInfosProps>) {
            const { userName, loggedInUserToken, userPhotoURL, userUID, internalID } = action.payload
            state.userName = userName
            state.loggedInUserToken = loggedInUserToken
            state.userPhotoURL = userPhotoURL
            state.userUID = userUID
            state.internalID = internalID
        }
    },
});

export default sliceUserInfos.reducer;
export const { addUserInfos } = sliceUserInfos.actions
export const useUserInfos = (state: { stateUserInfos: SliceUserInfosProps }) => {
    return state.stateUserInfos
}