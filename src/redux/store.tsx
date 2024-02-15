import { configureStore } from "@reduxjs/toolkit";
import sliceCheckin from "./slices/sliceCheckin";
import sliceLoadin from "./slices/sliceLoadin";

export interface RootState {
    checkin: ReturnType<typeof sliceCheckin>;
    stateIsLoading: ReturnType<typeof sliceLoadin>;
}
  
const store = configureStore ({
    reducer: {
        checkin: sliceCheckin,
        stateIsLoading: sliceLoadin
    }
})
  
export default store