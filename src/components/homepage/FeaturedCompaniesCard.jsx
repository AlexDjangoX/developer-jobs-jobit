import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { briefcase, pin, logo } from '../../../public/assets/svg-icons';
import Button from '../Button';

const FeaturedCompaniesCard = ({ searchResults }) => {
  return (
    <div className="flex w-full flex-col items-center px-4 lg:flex-row lg:items-center lg:px-1.5">
      {searchResults.map((result) => (
        <div
          key={result.id}
          className="m-2.5 flex w-full flex-col shadow hover:shadow-lg dark:hover:-translate-y-0 hover:-translate-y-[1px] rounded-xl bg-white p-4 dark:bg-blackBG2 sm:my-3 sm:w-full"
        >
          <div className="flex h-11 flex-row">
              <Image
                src={result?.logo ? result?.logo : logo}
                height={44}
                width={44}
                alt="Logo"
                className="rounded-lg shadow"
              />
            <p className="ml-1.5 self-center text-sm font-medium">
              {result?.employer}
            </p>
          </div>
          <div className="my-6 flex flex-row sm:flex-col">
            <div className="flex flex-row">
              <Image src={pin} height={20} width={20} alt="pin" />
              <p className="ml-2.5 mr-2 text-sm font-medium text-natural6">
                {result.city}, {result.country}
              </p>
            </div>
            <div className="mt-0 flex flex-row sm:mt-1">
              <Image src={briefcase} height={20} width={20} alt="suitcase" />
              <p className="ml-2.5 text-sm font-medium text-natural6 sm:mt-1.5">
                Job Vacancy
              </p>
            </div>
          </div>
          
          <Button variant='custom' additionalStyles="flex font-semibold shadow text-natural6 cursor-pointer justify-center rounded-xl bg-natural5 px-4 py-3 dark:bg-[#21212B]">
            <Link
              href={{
                pathname: `/company-details/${result?.employer}`,
              }}
            >
              See All
            </Link>  
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCompaniesCard;
