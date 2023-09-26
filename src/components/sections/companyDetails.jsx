'use client'

import Link from 'next/link'

import LargeCompanyDetailsCard from '@/components/company-details/LargeCompanyDetailsCard.jsx'
import SimilarCompaniesCard from '@/components/company-details/SimilarCompaniesCard.jsx'
import {useGetSearchFiltersQuery} from '@/redux/services/jobApi.js'
import { useJobSearch } from '@/utils/hooks/useJobSearch';
import Loader from '@/components/Loader.jsx'
import Button from '@/components/Button';

const CompanyDetails = ({companyName}) => {
  const query = companyName;
  
  const {
    results,
    error,
    isLoading,
  } = useJobSearch(query);

  let companyType = 'information'

  if(results?.employerCompanyType) {
    companyType = results?.employerCompanyType
  }

  const filterResults = useGetSearchFiltersQuery(companyType);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const similarCompaniesArray = filterResults?.data?.data.employers.slice(1,8);

  const similarCompaniesNames = similarCompaniesArray?.map((company) => (
    company.name
  ))

  if(results.length === 0) {
  return (
    <div className='flex pt-40 justify-center items-center flex-col'>
      <p className='text-2xl'>No Company Information Available</p>
      <p className='text-2xl mt-3'>Let's go home</p>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <Button additionalStyles='text-white px-4 py-2 mt-5 text-2xl'>Home</Button>
        </Link>  
    </div>
  )
  }

  return (
    <div className='flex justify-center bg-natural4 dark:bg-blackBG md:py-10'>
        <div className='flex w-full max-w-7xl flex-col justify-center items-center xl:items-start xl:flex-row'>
            <LargeCompanyDetailsCard data={results} companyName={companyName}/>
            <div className={`${similarCompaniesNames?.length === 0 ? 'hidden' : 'flex-col'} mt-5 flex mx-5 xl:mx-0 max-w-4xl xl:ml-5 xl:mt-20 xl:w-1/3 w-full px-5 xl:px-0`}>
                <p className='text-xl max-w-4xl self-center w-full font-medium'>Similar Companies</p>
                {similarCompaniesNames?.map((company, index) => (
                  <SimilarCompaniesCard key={index} companyName={similarCompaniesNames[index]} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default CompanyDetails
