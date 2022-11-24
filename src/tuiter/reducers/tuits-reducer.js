import { createSlice } from "@reduxjs/toolkit";
import { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
// };

// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// };

const initialState = {
    tuits: [],
    loading: false
};

const tuitsSlice = createSlice({
    name: "tuits",
    initialState,
    extraReducers: {
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits = payload
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits = state.tuits.filter(t =>
                    t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits.push(payload);
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const tuitIndex = state.tuits.findIndex(tuit => 
                    tuit._id === payload._id
                );
                state.tuits[tuitIndex] = {
                    ...state.tuits[tuitIndex],
                    ...payload
                };
            },
    },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
