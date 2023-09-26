import Image from 'next/image';
import Link from 'next/link';

import {archive, logo} from '../../../public/assets/svg-icons/index';
import { daysUntilEnd } from '@/utils';
import { formatSalary } from '@/utils/process-job-details.js/formatJobDetailsSalary';
import { shortenTitle } from '@/utils/process-job-details.js/shortenTitle';
import Button from '../Button';

const InlineJobCard = ({data}) => {

  const cardLogo = data?.employer_logo || logo;

  const salary = formatSalary(data?.job_max_salary)
  const deadline = daysUntilEnd(data?.job_offer_expiration_datetime_utc)
  const shortenedTitle = shortenTitle(data?.job_title)

  return (
    <div className="my-2.5 flex w-full shadow hover:shadow-lg hover:translate-y-[-1px] dark:hover:translate-y-0 flex-col rounded-xl bg-white p-4 dark:bg-blackBG2 lg:my-0 lg:mb-5">
      <div className="flex flex-row justify-between">
        <div className="flex">
          <div className="mr-2.5 flex h-11 w-11 bg-natural5 dark:bg-blackBG2 rounded-lg items-center">
            <Image 
              src={cardLogo} 
              height={44} 
              width={44} 
              alt="Logo" 
              className='rounded-lg'
              />
          </div>
          <div className="flex justify-between flex-col">
            <p className="font-medium text-sm">
              {shortenedTitle}
            </p>
            <p className="text-sm font-medium leading-5 text-natural6">
              {data?.job_city} {data?.job_country}
            </p>
          </div>
        </div>
        {data?.job_max_salary && data?.job_salary_currency && (
          <p className="text-sm font-medium justify-self-end text-right">
              {data?.job_salary_currency} {salary}{' '}
              <span className="text-xs font-normal text-natural6">
                  /{data?.job_salary_period}
              </span>
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-row justify-between">
        <p className="self-center text-sm font-medium leading-5 text-natural6">
          {deadline} {deadline === 1 ? 'day left' : 'days left'}
        </p>
        <div className="flex">
          <Button
            variant="custom"
            additionalStyles="px-1.5 h-7 border dark:border-blackBG3 border-natural2 mr-2 rounded-md"
          >
            <Image src={archive} height={24} width={24} alt="Bookmark Icon" />
          </Button>
          <Link href={`/job-search/${data?.job_id}`}>
            <Button
              additionalStyles="px-3 h-7 text-white text-xs font-semibold text-primary rounded-md">
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InlineJobCard;
