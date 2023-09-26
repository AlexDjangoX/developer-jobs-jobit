'use client'

import '../../app/globals.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';

import { heading, desktopHeading, oval, greenplus, cheveron, person1, person2, person3 } from '../../../public/assets/svg-icons/index.js';

import JobTitleSearch from '../JobTitleSearch';
import CompanyDetailsSmallJobCard from './CompanyDetailsSmallJobCard';

const LargeCompanyDetailsCard = ({data}) => {
  const [seeAll, setSeeAll] = useState(false);
  const [searchText, setSearchText] = useState('');

  const jobPills = ['About','Jobs','Products','Employees','Locations','Reviews'];

  const smallCardResults = data.slice(1,5).filter(item => item.longDescription.toLowerCase().includes(searchText.toLowerCase()));
  const expandedCardResults = data.slice(1,13).filter(item => item.longDescription.toLowerCase().includes(searchText.toLowerCase()));;

  const handleSearch = (text) => {
    if(text !== '') {
      setSeeAll(true);
      expandedCardResults.filter(item => item.longDescription.toLowerCase().includes(text.toLowerCase()));
    } else {
      setSeeAll(false);
    }
  }

  return (
    <div className="flex w-full xl:w-2/3 justify-self-center self-center mt-14 flex-col rounded-xl px-5 dark:bg-blackBG max-w-4xl">
    <Link
          href={{
            pathname: '/',
          }}
        >
          <Button variant='custom' additionalStyles='justify-self-start w-16 h-8 mb-3 rounded-md bg-natural2 text-natural6 ml-2 text-sm dark:border-none border mt-5 md:mt-0 dark:bg-blackBG3 border-natural5'>
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
       <div className="flex flex-col rounded-xl pt-5 ">
         <div>
           <div className="flex h-36">
             <Image
              src={desktopHeading}
              alt="heading"
              objectFit="fill"
              className="hidden w-full rounded-t-3xl xs:flex"
            />
            <Image
              src={heading}
              alt="heading"
              objectFit="fill"
              className="flex w-full rounded-t-3xl xs:hidden"
            />
          </div>
          {data[0]?.logo && (
            <Image
            src={data[0]?.logo}
            height={46}
            width={46}
            alt="logo"
            className="absolute ml-2.5 -translate-y-5 rounded-xl border-2 border-white"
          />
          )}
          
        </div>
        <div className="mt-9 flex flex-col justify-between px-2.5 xl:flex-row">
          <div className="flex flex-col border-naturalColor pb-5 dark:border-b xs:border-none">
            <p className="text-2xl">{data[0]?.employer}</p>
            <div className="mt-2.5 flex flex-row">
              <p className="text-lg text-natural3 dark:text-natural6">
                {data[0]?.employer}
              </p>
              <Image
                src={oval}
                height={3}
                width={3}
                alt="dot"
                className="m-1 md:flex"
              />
              <p className="self-center text-lg text-natural3 dark:text-natural6">
                {data[0]?.city} {data[0]?.country}
              </p>
            </div>
            <div className="mt-1 flex flex-row">
              <p className="text-base text-natural6">Design Resources Platform</p>
              <Image
                src={oval}
                height={3}
                width={3}
                alt="dot"
                className="m-1 md:flex"
              />
              <p className="text-base text-natural6">Followers</p>
            </div>
            <div></div>
          </div>
          <div className="mt-1.5 flex flex-col md:mt-0">
            <div className="mr-2 flex w-32 flex-row xl:self-end">
              <Image
                src={person1}
                height={40}
                width={40}
                alt="person1"
                className="rounded-full border-2 border-white bg-secondary1 dark:border-naturalColor"
              />
              <Image
                src={person2}
                height={40}
                width={40}
                alt="person2"
                className="absolute translate-x-8 rounded-full border-2 border-white bg-secondary2 dark:border-naturalColor"
              />
              <Image
                src={person3}
                height={40}
                width={40}
                alt="person3"
                className="absolute translate-x-16 rounded-full border-2 border-white bg-secondary3 dark:border-naturalColor"
              />
              <div className="absolute flex h-10 w-10 translate-x-24 items-center justify-center rounded-full border-2 border-white bg-natural2 text-xs font-semibold dark:border-naturalColor">
                <p className="text-naturalColor">+34</p>
              </div>
            </div>
            <div className="mt-4 flex w-full items-center justify-center rounded-xl border border-primary py-2 xl:w-36">
              <button className="flex flex-row">
                <Image src={greenplus} height={18} width={18} alt="+" />
                <p className="ml-1.5 text-sm text-primary">Follow</p>
              </button>
            </div>
          </div>
        </div>
        <div className="scrollbar-hide mt-7 flex flex-row overflow-scroll md:shadow-none xl:ml-2.5">
           {jobPills.map((pill, index) => (
             <button
               key={index}
               className="mr-1 flex cursor-pointer items-center justify-center rounded-xl border-2 border-natural5 bg-natural4 hover:bg-natural hover:text-white dark:border-naturalColor dark:bg-blackBG dark:hover:bg-naturalColor"
             >
               <p className="px-2.5 py-1.5 text-sm text-natural3 dark:hover:text-white">
                 {pill}
               </p>
             </button>
           ))}
         </div>

         <div className="mt-7 flex w-full flex-col rounded-xl bg-white shadow dark:bg-blackBG2">
           <div className="mx-5 mt-5">
             <JobTitleSearch handleSearch={handleSearch} setSearchText={setSearchText} setSeeAll={setSeeAll}/>
           </div>
           <p className="mx-5 mt-5 text-lg font-semibold">Recently Posted Jobs</p>
           <div className="mt-5 grid w-full flex-col px-2.5 xl:grid-cols-2">
            
           {seeAll 
              ? expandedCardResults.map(card => <CompanyDetailsSmallJobCard data={card} />)
              : smallCardResults.map(card => <CompanyDetailsSmallJobCard data={card} />)}

           </div>
           <div className="mt-8 flex items-center justify-center">
             <Button
               variant="custom"
               additionalStyles="border dark:border-none dark:bg-blackBG3 rounded-xl border-natural6 px-3 py-2 text-natural6 mb-8"
               onClick={() => setSeeAll((prevValue) => !prevValue)}
             >
               {seeAll ? ('See Less') : ('See All Jobs')}
             </Button>
           </div>
       </div>
       </div>
     </div>
  );
};

export default LargeCompanyDetailsCard;
