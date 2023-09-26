import '../../app/globals.css';
import Image from 'next/image';

import { shortenText } from '@/utils/process-api-data/shortenText';
import { getCleanString } from '@/utils/process-api-data/cleanString';
import { getCleanPill } from '@/utils/process-api-data/cleanPill';
import { shortenCompanyTitle } from '@/utils/process-api-data/shortenCompanyTitle';
import {dots, logo} from '../../../public/assets/svg-icons/index'
import Button from '../Button';

const CompanyDetailsSmallJobCard = ({ data }) => {
  const shortDescription = data?.description
    ? shortenText(data?.description, 120)
    : null;

  let cleanTitle = getCleanString(data?.title);
  cleanTitle = shortenCompanyTitle(cleanTitle);

  return (
    <div className="m-1.5 flex min-w-fit hover:shadow-lg hover:-translate-y-[1px] dark:hover:-translate-y-0 flex-col content-between justify-between rounded-xl p-5 shadow dark:bg-blackBG3 sm:m-3 sm:max-w-full">
      <div className="flex w-full flex-row justify-between">
        <div className="flex">
                <Image
                src={data?.logo ? data?.logo : logo}
                width={40}
                height={40}
                alt="logo"
                className='rounded-md max-w-10 max-h-10 mr-2 mt-1'
              />
          <div className="flex flex-col">
            <p className="text-base mr-2 font-semibold">{cleanTitle}</p>
            <div className="flex">
              <div className="scrollbar-hide absolute flex flex-row overflow-scroll w-[13rem] sm:w-[27rem] md:w-[32rem] xl:w-[16rem]">
                {data?.skills && data?.skills.map((pill, index) => (
                  <div
                    key={index}
                    className="mr-1.5 mt-1 flex self-end rounded bg-natural4 py-[1px] dark:bg-blackBG2"
                  >
                    <p className="whitespace-nowrap px-1.5 text-sm text-natural6">
                      {getCleanPill(pill)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={dots}
          width={16}
          height={16}
          alt="logo"
          className="flex h-4 w-4 justify-self-end"
        />
      </div>
      <div className="mt-8 dark:text-natural6">{shortDescription}</div>
      <div className="mt-5 flex flex-row justify-between">
        {data?.salary ? (
          <p className="self-center text-base font-semibold text-naturalColor">
            {data?.salary}
          </p>
        ) : (
          <p className="self-center text-base text-natural6">
            No wage available
          </p>
        )}
        <Button additionalStyles='px-3 text-white py-2 text-sm'>
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default CompanyDetailsSmallJobCard;


