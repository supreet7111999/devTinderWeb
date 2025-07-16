import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState:null,
  reducers: {
    addUser: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    console.log("action",action.payload);
    return action.payload;
    },
    removeUser: () => {
      return null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer