import { configureStore } from "@reduxjs/toolkit";
import sliceCheckin from "./sliceCheckin";

const store = configureStore ({
    reducer: {
        checkin: sliceCheckin
    }
})

export default store