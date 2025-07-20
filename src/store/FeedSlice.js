import { createSlice } from "@reduxjs/toolkit";

const FeedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
        removeUser:(state,action)=>{
           const d= state.filter((user)=>{ return user._id !== action.payload})
           return d;
        }
    }
})

export const {addUser,removeUser} = FeedSlice.actions;

export default FeedSlice.reducer;