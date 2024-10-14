import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TicketGateConfigurationProps } from './slicesStates/sliceUserInfosTypes';
import { SliceUserInfosProps } from './slicesStates/sliceUserInfosTypes';

const INITIAL_STATE: SliceUserInfosProps = {
    userName: '',
    loggedInUserToken: '',
    userPhotoURL: '',
    userUID: '',
    internalID: '',
    ticketGateConfiguration: []
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
        },
        setTicketGateConfiguration(state, action: PayloadAction<TicketGateConfigurationProps[]>) {
            state.ticketGateConfiguration = action.payload
        },
    },
})

export default sliceUserInfos.reducer
export const { addUserInfos, setTicketGateConfiguration } = sliceUserInfos.actions
export const useUserInfos = (state: { stateUserInfos: SliceUserInfosProps }) => {
    return state.stateUserInfos
}