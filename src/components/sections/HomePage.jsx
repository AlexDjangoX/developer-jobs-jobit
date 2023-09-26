'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { processResults } from '@/utils/process-api-data/processResults';

import InlineJobCard from '@/components/homepage/InlineJobCard';
import RecommendedCard from '@/components/homepage/RecommendedCard';
import FeaturedCompaniesCard from '@/components/homepage/FeaturedCompaniesCard';
import Loader from '@/components/Loader';
import DateDisplay from '@/components/DateDisplay';

import { useGetSearchResultsQuery } from '@/redux/services/jobApi.js';
import Button from '@/components/Button';

config.autoAddCss = false;

const HomePage = ({ query }) => {
  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetSearchResultsQuery({
    query: query,
    pages: 1,
    numPages: 1,
  });

  const results = useMemo(() => processResults(searchResults), [searchResults]);
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div className="flex items-center justify-center bg-natural4 dark:bg-blackBG">
        <div className="flex max-w-7xl mt-16 flex-col items-center justify-center self-center justify-self-center pt-10">
          <div className="mx-5 flex w-full justify-start flex-col sm:mx-0 lg:w-full lg:max-w-none">
            <h1 className="md:text-3xl text-2xl font-semibold m-5">
              Welcome to the Job Search Platform for Developers
            </h1>
            <div className="hidden lg:mx-5 lg:flex">
              <DateDisplay styles='text-natural6' />
            </div>
          </div>
          
          <div className="mt-8 flex flex-col w-full lg:mt-6 xl:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="mx-5 flex flex-row justify-between lg:max-w-full">
                  <h2 className="text-xl font-medium self-center">
                    Latest Job Posts
                  </h2>
                    <Link
                      href={{
                        pathname: '/job-search',
                      }}
                     >
                      <Button
                        variant="custom"
                        additionalStyles="border dark:border-blackBG3 shadow px-2.5 py-1.5"
                      >
                        <p className="text-natural3">See All</p>
                      </Button>
                    </Link>
                </div>
                <InlineJobCard searchResults={results} />
              </div>
              <h2 className="my-2 ml-4 text-xl font-medium">
                Featured Companies
              </h2>
              <div className="flex w-full flex-col">
                <FeaturedCompaniesCard searchResults={results.slice(0, 3)} />
              </div>
            </div>
            <div className="mx-4 mt-2 flex xl:w-1/3 flex-col items-center lg:ml-4 xl:mt-0">
              <div className="mb-2 flex w-full flex-row justify-between">
                <h2 className="text-xl font-medium self-center">Recommended For You</h2>
                  <Link
                      href={{
                        pathname: '/job-search',
                      }}
                  >
                    <Button
                      variant="custom"
                      additionalStyles="border dark:border-blackBG3 shadow px-2.5 py-1.5"
                    >
                      <p className="text-natural3">See All</p>
                    </Button>
                  </Link>
              </div>
              <div className="mt-2 shadow pb-5 pt-1 flex w-full flex-col items-center rounded-xl bg-white px-5 dark:bg-blackBG2">
                <RecommendedCard searchResults={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
