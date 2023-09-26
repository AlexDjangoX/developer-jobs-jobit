import React from 'react';
import Image from 'next/image';

import { ovalLightGrey, logo } from '../../../public/assets/svg-icons';
import { shortenCompanyTitle } from '@/utils/process-api-data/shortenCompanyTitle';

const RecommendedCard = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((result) => (
        <div
          key={result.id}
          className="flex w-full mt-4 hover:shadow-lg hover:-translate-y-[1px] dark:hover:-translate-y-0 shadow justify-between rounded-lg bg-natural4 px-3 py-3 dark:bg-blackBG3"
        >
            <div className='flex w-full flex-row items-center'>
                  <Image
                    src={result?.logo ? result?.logo : logo}
                    height={36}
                    width={36}
                    alt="logo"
                    className="rounded-lg mr-2 shadow"
                  />

              <div className='flex w-full flex-col'>
                  <div className='flex w-full justify-between'>
                    <p className='text-sm'>{result?.title && shortenCompanyTitle(result?.title)}</p>
                    {result?.salary && (
                    <p className="justify-self-end mt-[2px] text-right text-xs font-normal dark:text-white">
                    {result?.salary}
                  </p>
                )}
                  </div>
                  <div className='flex w-full flex-row justify-between'>
                      <div className='flex'>
                        <p className="text-xs dark:text-natural6 font-light leading-5 text-natural3">
                          {result?.employer}
                        </p>
                        <Image
                          src={ovalLightGrey}
                          height={3}
                          width={3}
                          alt="dot"
                          className="m-1 sm:flex"
                        />
                        <p className="text-xs leading-5 dark:text-natural6 font-light text-natural3">
                          {result?.city} {result?.country}
                        </p>
                      </div>
                        <p className="text-xs dark:text-natural6 font-light self-center text-natural3">
                          {result?.jobType}
                        </p>
                      
                    </div>
                  </div>
                </div>
              </div>

        
       
      ))}
    </>
  );
};

export default RecommendedCard;
