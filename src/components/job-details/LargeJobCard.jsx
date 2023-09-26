import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link.js';

import { desktopHeading, heading, saved, oval, ovalGreen, dotsVertical, greenplus, cheveron } from '../../../public/assets/svg-icons/index.js';
import Button from '../Button.jsx';

import { processJobDetails } from '@/utils/process-job-details/processJobDetails.js';
import { getDaysSince } from '@/utils/process-job-details/getDaySince.js';
const HeaderLargeJobCard = ({ cardData }) => (
  <div>
    <div className='flex h-40'>
      <Image
        src={desktopHeading}
        alt='heading'
        objectFit='fill'
        className='hidden w-full rounded-t-3xl xs:flex'
      />
      <Image
        src={heading}
        alt='heading'
        objectFit='fill'
        className='flex w-full rounded-t-3xl xs:hidden'
      />
    </div>
    {cardData?.logo ? (
      <Image
        src={cardData?.logo}
        height={46}
        width={46}
        alt='logo'
        className='absolute ml-2.5 -translate-y-5 rounded-md border-2 border-white'
      />
    ) : (
      <div className='mr-2.5 h-7 w-7'></div>
    )}
  </div>
);

const SubHeadingLargeJobCard = ({ cardData }) => (
  <div className='mt-8 flex flex-row justify-between px-2.5'>
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <p className='text-base font-medium'>{cardData?.employerName}</p>
        <Image
          src={saved}
          height={20}
          width={20}
          alt='tag'
          className='ml-2 self-start sm:ml-4'
        />
      </div>
      <div className='mt-2 flex flex-col justify-start md:flex-row'>
        <div className='flex flex-row'>
          <p className='text-sm font-normal text-natural3 dark:text-natural6'>
            {cardData?.employerName}
          </p>
          <Image
            src={oval}
            height={3}
            width={3}
            alt='dot'
            className='m-1 hidden md:flex'
          />
        </div>

        <div className='flex flex-row'>
          <p className='text-sm font-normal text-natural3 dark:text-natural6'>
            {cardData?.city} {cardData?.country}
          </p>
          <Image
            src={oval}
            height={3}
            width={3}
            alt='dot'
            className='m-1 md:flex'
          />
          <p className='text-sm font-normal text-natural3 dark:text-natural6'>
            {cardData?.daysSinceJobPosted}
          </p>
        </div>
      </div>
    </div>
    <div className='flex flex-row'>
      <div className='hidden self-center lg:flex'>
        <Link
          href={`${cardData?.jobApply}`}
          className='flex w-full'
          target='_blank'
        >
          <Button additionalStyles='mr-4 px-4 py-2 h-10 text-base rounded-lg text-white'>
            Apply Now
          </Button>
        </Link>
        <Button
          variant='custom'
          additionalStyles='mr-4 text-natural3 px-4 rounded-lg border-2 dark:border dark:text-natural6 border-natural5 py-2 h-10 text-base'
        >
          Message
        </Button>
      </div>

      <Image
        src={dotsVertical}
        height={24}
        width={24}
        alt='dots'
        className='self-start xs:self-center'
      />
    </div>
  </div>
);

const PilLargeJobCard = ({ cardData }) => (
  <div className='mt-6 flex flex-col rounded-xl bg-natural4 dark:bg-blackBG3 sm:mx-2.5 md:flex-row md:justify-between'>
    <div className='flex w-full flex-row justify-between border-b p-2.5 dark:border-blackBG2 md:justify-around md:border-b-0'>
      <div className='flex flex-col'>
        <p className='text-sm text-natural6'>Experience</p>
        <p>{cardData?.jobRequireExperience}</p>
      </div>
      <div className='ml-7 flex flex-col'>
        <p className='text-sm text-natural6'>Work Level</p>
        <p>{cardData?.jobLevel}</p>
      </div>
    </div>
    <div className='flex w-full flex-row justify-between p-2.5 md:justify-around'>
      <div className='flex flex-col'>
        <p className='text-sm text-natural6'>Employee Type</p>
        <p>{cardData?.jobEmploymentType}</p>
      </div>
      <div className='ml-7 flex flex-col'>
        <p className='text-sm text-natural6'>Offer Salary</p>
        {cardData?.salary ? <p>{cardData?.salary}</p> : <p>No info</p>}
      </div>
    </div>
  </div>
);

const CallToAction = ({ cardData }) => (
  <div className='mt-4 flex flex-row justify-between sm:mx-2.5 lg:hidden'>
    <Link href={`${cardData?.jobApply}`} className='flex w-full'>
      <Button additionalStyles='mr-2 flex w-full text-white justify-center rounded-xl py-2.5'>
        Apply Now
      </Button>
    </Link>
    <Button
      variant='custom'
      additionalStyles='ml-2 flex w-full justify-center rounded-xl border border-naturalColor6 py-2.5 dark:border-blackBG3 text-natural3 dark:text-natural6'
    >
      Message
    </Button>
  </div>
);

const AboutJob = ({ cardData }) => (
  <div className='mt-6 flex flex-col border-b pb-5 dark:border-none dark:pb-6 sm:mx-2.5 md:border-b-0'>
    <p className='text-base font-semibold'>About the Job</p>
    <p className='mt-2.5 text-sm text-natural3 dark:text-naturalColor6'>
      {cardData?.jobDescription}
    </p>
  </div>
);

const AboutCompany = ({ cardData }) => (
  <div className='mt-5 pb-4 sm:mx-2.5'>
    <p className='mb-2.5 text-base font-semibold'>About The Company</p>
    <div className='flex w-3/4 flex-col justify-between md:w-full md:flex-row'>
      <div className='flex flex-row'>
        {cardData?.logo ? (
          <Image
            src={cardData?.logo}
            height={34}
            width={34}
            alt='logo'
            className='mr-5 self-center rounded-md border border-white'
          />
        ) : (
          <div className='mr-2.5 h-7 w-7'></div>
        )}
        <div className='flex flex-col'>
          <p className='text-base font-normal'>{cardData?.employerName}</p>
          <p className='text-base text-natural3'>#### followers</p>
        </div>
      </div>
      <div className='mt-3 flex items-center justify-center rounded-xl border border-primary py-2 md:px-2.5'>
        <Image
          src={greenplus}
          width={18}
          height={18}
          alt='plus'
          className='mr-2'
        />
        <p className='text-sm text-primary'>Follow</p>
      </div>
    </div>
    <p className='mt-5 text-base text-natural3 dark:text-naturalColor6'>
      {cardData?.jobDescription}
    </p>
  </div>
);

const QualificationsSkills = ({ cardData }) => {
  <div className='mt-5 border-b pb-4 dark:border-none dark:pb-4 sm:mx-2.5 md:border-b-0'>
    <p className='mb-2.5 text-base font-semibold'>
      Qualifications and Skill Sets
    </p>
    {cardData?.simpleJobDescription?.map((description, index) => (
      <div key={index} className='flex flex-row'>
        <Image src={ovalGreen} alt='dot' className='mr-2.5 mt-1 self-start' />
        <p className='pb-1 text-sm text-natural3 dark:text-naturalColor6'>
          {description}
        </p>
      </div>
    ))}
  </div>;
};

const JobResponsibilities = ({ cardData }) => {
  <div className='mt-5 border-b pb-4 sm:mx-2.5 md:border-b-0'>
    <p className='mb-2.5 text-base font-semibold'>Responsibilities</p>
    {cardData[0]?.simpleJobDescription?.map((description, index) => (
      <div key={index} className='flex flex-row'>
        <Image src={ovalGreen} alt='dot' className='mr-2.5 mt-1 self-start' />
        <p className='pb-1 text-sm text-natural3 dark:text-naturalColor6'>
          {description}
        </p>
      </div>
    ))}
  </div>;
};

const LargeJobCard = ({ cardData }) => {
  const results = useMemo(() => processJobDetails(cardData[0]), [cardData]);

  return (
    <div className='flex flex-col'>
          <Link
          href='/'
        >
          <Button variant='custom' additionalStyles='justify-self-start w-16 h-8 mb-4 rounded-md bg-natural2 text-natural6 text-sm dark:border-none border dark:bg-blackBG3 border-natural5'>
            <Image 
              src={cheveron}
              height={18}
              width={18}
              alt='chevron'
              className='mr-1 rotate-90'
            />
            <p className='mr-1'>Back</p>
          </Button>
        </Link>
    <div className="flex h-fit shadow hover:shadow-lg hover:translate-y-[-1px] dark:hover:translate-y-0 w-full flex-col rounded-2xl bg-white p-5 dark:bg-blackBG2 xl:mr-2.5">
      <div className="flex flex-col">
        <HeaderLargeJobCard cardData={results} />
        <SubHeadingLargeJobCard cardData={results} />
      </div>
      <PilLargeJobCard cardData={results} />
      <CallToAction cardData={results} />
      <AboutJob cardData={results} />

      <AboutCompany cardData={results} />
    </div>
  </div>  
  );
};

export default LargeJobCard;
