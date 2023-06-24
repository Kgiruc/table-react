import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Details } from '../../models/Details';
import { Book } from '../../models/book';

const initialState: Details = {
  book: {} as Book,
  isOpen: false,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    detailsBook: (state, action: PayloadAction<{ book: Book }>) => {
      const { book } = action.payload;
      return {
        ...state,
        book,
      };
    },
    openDetails: (state) => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { detailsBook, openDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
