'use client';

import Image from 'next/image.js';
import { useDispatch, useSelector } from 'react-redux';

import { search, briefcase } from '../../../public/assets/svg-icons/index';
import { updateField, resetForm } from '@/redux/features/searchJobsSlice';
import AutoComplete from './AutoComplete';
import Button from '../Button';

const SearchQueryForm = ({ setQueryByAddress }) => {
  const dispatch = useDispatch();
  const { language, job, address } = useSelector((state) => state?.searchJobs);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = `${language}, ${job}, ${address} `;
    setQueryByAddress(query);
    dispatch(resetForm());
    localStorage.setItem('currentPage', 1);
  };

  return (
    
      <div className="flex w-full rounded-2xl hover:shadow-lg shadow">
        <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row w-full py-3 md:py-0 bg-white dark:bg-blackBG2 md:h-16 px-5 rounded-2xl justify-between"
            >

          <div className="flex w-full px-5 md:px-0 flex-row py-3 md:py-0 border-b md:border-b-0 border-natural2 dark:border-naturalColor">
            <Image
              className="mr-3"
              src={search}
              alt="icon-search"
              height={28}
              width={28}
            />
            <input
              type="text"
              id="language"
              name="language"
              placeholder="Job Title or Company"
              className="w-full flex dark:bg-blackBG2 outline-none text-natural6 font-semibold md:mr-3 lg:mr-10 text-sm border-natural2 dark:border-naturalColor border-r-0 md:border-r"
              onChange={handleChange}
              value={language}
            />
          </div>

        <AutoComplete />

        <div className="flex w-full px-5 md:px-0 flex-row py-3 md:py-0 border-b md:border-b-0 border-natural2 dark:border-naturalColor">
          <Image
            className="mr-3"
            src={briefcase}
            alt="icon-briefcase"
            height={28}
            width={28}
          />
          <input
            type="text"
            id="job"
            name="job"
            placeholder="Job Type"
            className="w-full dark:bg-blackBG2 outline-none text-natural6 font-semibold text-sm"
            onChange={handleChange}
            value={job}
          />
        </div>

        <div className="flex items-center mt-5 md:mt-0">
          <Button
            isSubmit={true}
            additionalStyles="py-2.5 md:w-24 shadow w-full mt text-sm text-white font-medium"
          >
            Find Jobs
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchQueryForm;
