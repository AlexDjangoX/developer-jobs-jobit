'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import JobCard from '../job-search/JobCard';
import Loader from '../Loader';
import SearchQueryForm from '../search/SearchQueryForm';
import DropDown from '../search/DropDown';
import DateDisplay from '../DateDisplay';

import { sortOptions, dropDownOptions } from '@/utils/dropDownOptions.utils';
import { useJobSearch } from '@/utils/hooks/useJobSearch';
import { applyFilters } from '@/utils/filterJobSearchPage.utils';
import Pagination from '../pagination/Pagination';

const DropDownComponent = ({ countData }) => {
  return (
    <div className="flex-col w-1/4 hidden lg:flex mr-6 xl:mr-16">
      {dropDownOptions.map((dropdown) => (
        <DropDown
          key={dropdown.label}
          label={dropdown.label}
          options={dropdown.options}
          fieldName={dropdown.fieldName}
          labelSize="text-lg"
          optionSize="text-sm"
          countByTimeRange={countData[dropdown.countDataKey]}
        />
      ))}
    </div>
  );
};

const ResultsColumn = ({ results, pagesByTens, setPagesByTens, lastPage }) => {
  const searchFilters = useSelector((state) => state.filterJobs);
  const allFilters = Object?.values(searchFilters)?.flat();

  const newResults = applyFilters(results, allFilters);

  return (
    <div className="flex flex-col w-full lg:w-3/4">
      <div className="flex items-center justify-between">
        <p className="text-natural6">
          Showing:{' '}
          <span className="text-black font-semibold dark:text-white">Jobs</span>
        </p>
        <div className="flex flex-row items-center ">
          <p className="text-natural6">Sort by:</p>
          <div className="flex ml-2">
            <DropDown
              label="Average"
              options={sortOptions}
              fieldName="sortOptions"
              isAbsolute={true}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <JobCard searchResults={newResults} />
        <Pagination
          pageNumbers={pagesByTens}
          setPagesByTens={setPagesByTens}
          lastPage={lastPage}
        />
      </div>
    </div>
  );
};

const JobSearchPage = ({ query }) => {
  const [queryByAddress, setQueryByAddress] = useState('');
  const [pagesByTens, setPagesByTens] = useState(1);

  const { results, error, isFetching, isLoading, countData, lastPage } =
    useJobSearch(queryByAddress || query, pagesByTens, 1);

  if (isFetching || isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="w-full justify-center flex px-5 dark:bg-blackBG pt-16 bg-[#F9FAFC]">
        <div className="flex flex-col max-w-7xl">
          <p className="text-2xl mt-8 font-semibold">
            Let's find your dream job
          </p>
          <div className="flex mt-5">
            <DateDisplay styles='text-natural6' />
          </div>

          <div className="flex flex-col mt-10 md:mt-7">
            <div className="flex w-full">
              <SearchQueryForm setQueryByAddress={setQueryByAddress} />
            </div>
            <div className="flex flex-row mt-8">
              <DropDownComponent countData={countData} />
              <ResultsColumn
                results={results}
                pagesByTens={pagesByTens}
                setPagesByTens={setPagesByTens}
                lastPage={lastPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearchPage;
