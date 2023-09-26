'use client';

import Link from 'next/link';

import DateDisplay from '@/components/DateDisplay';
import LargeJobCard from '@/components/job-details/LargeJobCard';
import InlineJobDetailsCard from '@/components/job-details/InlineJobDetailsCard';
import Loader from '@/components/Loader';

import { useGetJobDetailsQuery, useGetSearchResultsQuery } from '@/redux/services/jobApi';

export default function Page({ params }) {
  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetJobDetailsQuery(params.id);

  const jobTitle = searchResults?.data[0]?.job_title || 'web developer';

  const filterResults = useGetSearchResultsQuery({ query: jobTitle, pages: 1, numPages: 1 });
  const inlineJobDetailsCardData = filterResults?.data?.data.slice(1,9);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex w-full items-center justify-center dark:bg-blackBG">
      <div className="flex mt-16 max-w-7xl flex-col items-center justify-center bg-natural4 p-4 dark:bg-blackBG">
        <div className="flex w-full flex-col pt-5">
          <p className="text-2xl font-semibold md:text-3xl">Let&apos;s find your dream job</p>
          <DateDisplay styles='md:text-lg mt- text-natural6 my-2 mb-7'/>
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className='flex w-full xl:w-2/3 xl:pr-5 max-w-4xl'>
            <LargeJobCard cardData={searchResults.data} />
          </div>
          <div className="mt-5 flex w-full flex-col xl:mt-0 xl:w-1/3 xl:self-start">
          <p className='text-lg justify-self-start mb-5 font-semibold'>Similar Jobs</p>
          {inlineJobDetailsCardData && 
          inlineJobDetailsCardData.map((card) => (
            <InlineJobDetailsCard key={card.id} data={card}/>
          ))}            
          </div>
        </div>
      </div>
    </div>
  );
}
