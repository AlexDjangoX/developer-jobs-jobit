import { useDispatch, useSelector } from 'react-redux';
import { updateFilterOption } from '@/redux/features/filterJobsSlice';

export const useFilterOptions = (fieldName) => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(
    (state) => state?.filterJobs?.[fieldName] || []
  );

  const handleChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((value) => value !== option)
      : [...selectedOptions, option];
    dispatch(updateFilterOption({ name: fieldName, value: updatedOptions }));
  };

  return { selectedOptions, handleChange };
};
