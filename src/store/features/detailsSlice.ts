import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Details } from '../../models/Details';
import { Book } from '../../models/book';

const initialState = {
  book: {} as Book,
  isOpen: false,
} as Details;

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    detailsBook(state, action: PayloadAction<{ book: Book }>) {
      const { book } = action.payload;
      return {
        ...state,
        book,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { detailsBook } = detailsSlice.actions;
export default detailsSlice.reducer;
