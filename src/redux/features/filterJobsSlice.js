import { createSlice } from '@reduxjs/toolkit';

const filterJobsSlice = createSlice({
  name: 'filterJobs',
  initialState: {
    datePostedOptions: [],
    remoteJobsOptions: false,
    employmentTypeOptions: [],
    jobRequirementsOptions: [],
  },
  reducers: {
    updateFilterOption: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateFilterOption } = filterJobsSlice.actions;

export default filterJobsSlice.reducer;
