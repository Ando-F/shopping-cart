import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./reducers/itemsSlice";

export default configureStore({
    reducer: {
        items: itemsSlice,
    },
})