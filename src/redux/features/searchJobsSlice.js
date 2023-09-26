import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: '',
  job: '',
  city: '',
  country: '',
  address: '',
};

const searchJobSlice = createSlice({
  name: 'searchJobs',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: (state) => {
      return state.initialState;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = searchJobSlice.actions;

export default searchJobSlice.reducer;
