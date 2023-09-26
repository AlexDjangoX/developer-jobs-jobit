import Image from 'next/image';

import { useJobSearch } from '@/utils/hooks/useJobSearch';
import { logo, greenplus } from '../../../public/assets/svg-icons/index.js';
import Button from '../Button';

const SimilarCompaniesCard = ({ companyName }) => {
  const query =`${encodeURIComponent(companyName)}`;

  const {
    results,
    error,
    isLoading,
  } = useJobSearch(query);

  let employerLogo = logo;

  if (results && results[0].logo) {
    employerLogo = results[0].logo;
  }
  
  return (
    <div className="my-2.5 self-center flex w-full flex-row hover:shadow-lg hover:-translate-y-[1px] dark:hover:-translate-y-0 justify-between rounded-xl bg-white px-4 py-4 shadow dark:bg-blackBG3">
      <div className="flex flex-row items-center">
          <Image
            src={employerLogo}
            height={37}
            width={37}
            alt="logo"
            className="w-12 mr-2.5 border-2 rounded-lg border-white dark:border-blackBG3"
          />
        <div className="flex flex-col justify-between">
          <p className="mb-1 text-sm">{companyName}</p>
          <p className="text-xs text-natural6">{companyName}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button variant='custom' additionalStyles='text-sm text-primary border-primary border px-2 py-1.5'>
          <Image
            src={greenplus}
            height={18}
            width={18}
            alt="+"
            className="mr-1.5"
          />
            <p className="text-sm text-primary">Follow</p>  
         </Button> 
       </div>
     </div> 
  );
};

export default SimilarCompaniesCard;
