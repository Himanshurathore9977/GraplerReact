import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  workspaces: [],
};
const workspaceSlice = createSlice({
  name: 'workspace', // Change the name to 'workspace'
  initialState,
  reducers: {
    fetchWorkspaces: (state, action) => {
      console.log('inside fetchWorkspaces slice', action.payload);
      state.workspaces = action.payload;
    },
  },
});
export const { fetchWorkspaces, updateWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;