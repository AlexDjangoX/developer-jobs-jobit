import Image from 'next/image';
import Link from 'next/link.js';

import { briefcase, clock, people, dots, logo } from '../../../public/assets/svg-icons/index.js';

import { shortenText } from '@/utils/process-api-data/shortenText.js';
import { shortenCompanyTitle } from '@/utils/process-api-data/shortenCompanyTitle.js';
import Button from '../Button.jsx';

const InlineJobCard = ({ searchResults }) => {
  return (
    <>
      <div className="flex flex-col items-center lg:grid lg:max-w-5xl lg:grid-cols-2 lg:items-center lg:justify-between md:px-5 lg:px-0">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="m-4 shadow hover:shadow-lg hover:-translate-y-[1px] dark:hover:-translate-y-0 flex md:w-full lg:max-w-full lg:w-fit flex-col rounded-xl bg-white p-5 dark:bg-blackBG2 xl:max-w-sm"
          >
            <div className="flex flex-row justify-between">
              <div className="justify-center align-top sm:flex ">
                <div className="rounded-xl sm:mr-3 mr-2 border-2 border-natural4 bg-natural4 p-1 dark:border-blackBG3 dark:bg-blackBG2 h-14 w-14 sm:justify-center sm:p-1.5 sm:align-middle sm:dark:border-2 shadow sm:dark:border-blackPadding sm:dark:bg-blackPadding">
                    <Image
                      src={result?.logo ? result?.logo : logo}
                      alt="logo"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    </div>
              </div>

              <div className="flex justify-between flex-auto h-14 flex-col">
                <p className="text-black dark:text-white md:text-base font-medium">
                  {shortenCompanyTitle(result.title)}
                </p>
                <div className="flex mt-1 flex-row justify-start">
                  {result.skills.map((pill, index) => (
                    <div
                      key={index}
                      className="mr-2 shadow flex items-center justify-center rounded-md bg-natural4 dark:bg-blackBG3"
                    >
                      <p className="mx-1.5 py-[2px] text-xs text-natural6 sm:mx-2 sm:text-sm">
                        {pill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex text-black">
                <div>
                  <Image src={dots} height={16} width={16} alt="..." />
                </div>
              </div>
            </div>
            <div className="my-8 flex lg:h-20 lg:items-center">
              <p className="font-light text-natural3 dark:text-natural6">
                {shortenText(result.description, 150)}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="mx-1 my-1.5 flex h-8 shadow flex-auto items-center justify-center rounded bg-natural4 dark:bg-blackBG3">
                <div className="flex flex-row items-center">
                  <Image
                    src={briefcase}
                    height={18}
                    width={18}
                    alt="briefcase"
                  />
                  <p className="ml-2 text-sm text-natural6 sm:text-sm">
                    {result.jobType}
                  </p>
                </div>
              </div>
              <div className="mx-1 my-1.5 flex h-8 shadow flex-auto justify-center rounded bg-natural4 dark:bg-blackBG3">
                <div className="flex flex-row items-center">
                  <Image src={people} height={18} width={18} alt="people" />
                  <p className="ml-2 text-sm text-natural6 sm:text-sm">
                    Applied
                  </p>
                </div>
              </div>
              <div className="mx-1 my-1.5 flex h-8 shadow flex-auto justify-center rounded bg-natural4 dark:bg-blackBG3">
                <div className="flex flex-row items-center">
                  <Image src={clock} height={18} width={18} alt="clock" />
                  <p className="ml-2 text-sm text-natural6 sm:text-sm">
                    {result.daysLeft} days left
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                'mt-8 flex flex-auto px-1 flex-row items-center justify-between'
              }
            >
              {result.salary && (
                <p className="mr-2.5 font-medium text-black dark:text-white sm:mr-8 sm:text-md">
                  {result.salary}
                </p>
              )}
              {!result.salary && (
                <p className="text-sm text-natural3">
                  No salary range provided
                </p>
              )}
              <Link
                href={`${result?.jobApplyLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button additionalStyles="mr-0 flex cursor-pointer px-3 py-2.5 shadow text-sm text-white sm:text-sm">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InlineJobCard;
