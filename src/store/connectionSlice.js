import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {  // Fix here
    addConnections: (state, action) => {
      return action.payload;
    }
  }
});

export const { addConnections } = connectionSlice.actions;  // Fix here

export default connectionSlice.reducer;
