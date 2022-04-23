import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import apple from "../../images/iu.png";
import banana from "../../images/iu-2.png";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        value: [
            {
                id: 1,
                uniqid: uniqid(),
                img: apple,
                name: 'Apple',
                price: 10,
                quantity: 0
            },
            {
                id: 2,
                uniqid: uniqid(),
                img: banana,
                name: 'Banana',
                price: 15,
                quantity: 0
            }
        ]
    },
    reducers: {
        increment: (state, action) => {
            state.value[action.payload - 1].quantity += 1
        },
        decrement: (state, action) => {
            state.value[action.payload - 1].quantity -= 1
        }
    }
})

export const { increment, decrement } = itemsSlice.actions

export default itemsSlice.reducer