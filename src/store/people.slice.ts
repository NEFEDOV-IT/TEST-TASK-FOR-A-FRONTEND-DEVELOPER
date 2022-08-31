import {createSlice} from "@reduxjs/toolkit";

const initialState: any[] = [];

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPeopleData(state, action) {
            return state = action.payload
        },
        sortPeopleData(state, action) {
            if (action.payload === 1) {
                return state.sort((a, b) => {
                    if (a.address.city < b.address.city) return -1;
                    if (a.address.city > b.address.city) return 1;
                    return 0;
                });
            }
            if (action.payload === 2) {
                return state.sort((a, b) => {
                    if (a.company.name < b.company.name) return -1;
                    if (a.company.name > b.company.name) return 1;
                    return 0;
                });
            }
        }
    }
})

export const peopleData = peopleSlice.reducer
export const {addPeopleData, sortPeopleData} = peopleSlice.actions