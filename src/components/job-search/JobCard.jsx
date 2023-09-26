'use client';

import Image from 'next/image';
import Link from 'next/link';

import { oval, archive, logo } from '../../../public/assets/svg-icons';
import Button from '../Button';

const JobCard = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((result) => (
        <div
          key={result.jobId}
          className="flex flex-col shadow hover:shadow-lg hover:-translate-y-[1px] dark:hover:-translate-y-0 rounded-xl bg-white px-5 py-5 mb-5 text-black dark:bg-blackBG2"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
                <div className='mr-5 flex h-11 w-11 items-center justify-center rounded-lg border-2 border-natural4 bg-natural shadow dark:border-2 dark:border-blackBG3 dark:bg-blackBG3 md:h-16 md:w-16'>
                    <Image
                      src={result?.logo ? result?.logo : logo}
                      alt='logo'
                      height={100}
                      width={100}
                      className='h-9 w-9 items-center rounded-lg md:h-12 md:w-12'
                    />                   
                </div>
              <div className="flex-col">
                <p className="text-lg font-normal dark:text-white">
                  {result?.title}
                </p>
                <div className="mt-2 flex flex-col justify-start md:flex-row">
                  <div className="flex flex-row">
                    <p className="text-sm font-light text-natural3 dark:text-natural6">
                      {result?.employer}
                    </p>
                    {result.employer && (
                      <Image
                        src={oval}
                        height={3}
                        width={3}
                        alt="dot"
                        className="m-1 hidden md:flex"
                      />
                    )}
                  </div>

                  <div className="flex flex-row">
                    <p className="text-sm font-light text-natural3 dark:text-natural6">
                      {result?.city} {result?.country}
                    </p>
                    <Image
                      src={oval}
                      height={3}
                      width={3}
                      alt="dot"
                      className="m-1 md:flex"
                    />
                    <p className="text-sm font-light text-natural3 dark:text-natural6">
                      {result?.dateAdded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex shadow cursor-pointer flex-row dark:bg-blackBG3 md:rounded-lg md:bg-natural4 md:px-3 md:py-2">
                <p className="mr-1.5 hidden font-normal text-natural6 md:flex">
                  Save Job
                </p>
                <Image src={archive} width={19} height={19} alt="archive" />
              </div>
            </div>
          </div>
          <div className="my-5">
            <p className="text-sm font-light leading-5 text-natural3 dark:text-naturalColor6 md:text-sm">
              {result?.description}
            </p>
          </div>
          <div className="flex flex-row">
            {searchResults?.skills?.map((pill, index) => (
              <div
                key={index}
                className="mr-1 flex items-center rounded bg-natural5 align-middle dark:bg-blackBG3"
              >
                <p className="px-2.5 py-1 text-natural6">{pill}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-between md:flex-row">
            <div
              className={`flex flex-row items-center ${
                result?.salary ? 'justify-between' : 'justify-end'
              }`}
            >
              {result?.salary && (
                <p className="mr-2.5 text-lg dark:text-white md:mr-8">
                  {result?.salary}
                </p>
              )}
              <p className="dark:text-white md:flex">
                43
                <span className="ml-2 font-light text-natural3">
                  People Applied
                </span>
              </p>
            </div>
            <div className="mt-6 flex flex-row justify-between md:mt-0">
              <Button additionalStyles="py-3 w-full mr-2.5 rounded-xl shadow text-sm md:w-40 text-white font-medium">
                <Link href={`/job-search/${result?.jobId}`}>View Details</Link>
              </Button>
              <Button additionalStyles="py-3 w-full ml-2.5 rounded-xl shadow text-sm md:w-40 text-white font-medium">
                <Link
                  href={`${result.jobApplyLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCard;
