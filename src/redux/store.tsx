import { configureStore } from "@reduxjs/toolkit";
import sliceCheckin from "./slices/sliceCheckin";
import sliceAPP from "./slices/sliceAPP";
import sliceUserInfos from "./slices/sliceUserInfos";

export interface RootState {
    checkin: ReturnType<typeof sliceCheckin>;
    app: ReturnType<typeof sliceAPP>;
    userInfos: ReturnType<typeof sliceUserInfos>;
}
  
const store = configureStore ({
    reducer: {
        checkin: sliceCheckin,
        app: sliceAPP,
        userInfos: sliceUserInfos
    }
})
  
export default store;