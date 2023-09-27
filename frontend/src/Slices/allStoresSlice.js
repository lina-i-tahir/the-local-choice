import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stores: [], 
};

const allStoresSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setStores } = allStoresSlice.actions;
export default allStoresSlice.reducer;
