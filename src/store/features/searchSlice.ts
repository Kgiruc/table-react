import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchBook(state, action: PayloadAction<{ search: string }>) {
      const { search } = action.payload;
      return {
        ...state,
        search,
      };
    },
  },
});

export const { searchBook } = searchSlice.actions;
export default searchSlice.reducer;
