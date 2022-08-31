import {configureStore} from "@reduxjs/toolkit";
import {peopleData} from "./people.slice";

export const store = configureStore({
    reducer: peopleData,
})