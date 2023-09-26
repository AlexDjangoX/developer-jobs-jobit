'use client'

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Formik, Form } from 'formik';
import { HashLoader } from 'react-spinners';
import { useTheme } from 'next-themes';
import {v4 as uuidv4} from 'uuid';

import DateDisplay from '@/components/DateDisplay';
import Button from '../Button';
import { initialGraphData, barChartSeries, barChartOptions, fetchData} from '@/utils/graphData';
import { useToast } from '@/utils/hooks/useToast';
import { FieldComponent } from '@/utils/formikFieldComponent';

const EstimatedSalaries = () => {
    const {dispatch} = useToast();
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const [showChart, setShowChart] = useState(true);
    const [searchData, setSearchData] = useState(initialGraphData);
    const [series, setSeries] = useState(barChartSeries(searchData));
    const [options, setOptions] = useState(barChartOptions(searchData, theme, isDarkMode));

    const showToast = (type, title, message) => { return dispatch({
        type: "ADD_NOTIFICATION",
        payload: {id: uuidv4(), type, title, message}
    })}

  useEffect(() => {
    setOptions(barChartOptions(searchData, theme, isDarkMode));
  }, [theme, searchData, isDarkMode]);

  return (
    <div className='flex items-center justify-center self-center justify-self-center bg-natural4 dark:bg-blackBG'>
      <div className='mt-16 py-2.5 flex max-w-7xl w-full flex-col items-center justify-center xl:mt-28 xl:flex-row xl:items-start'>
        <div className='mb-4 flex w-full xl:max-w-2xl max-w-5xl flex-col px-4 xl:px-0 xl:mb-0 xl:mt-0 mt-8 xl:mr-20'>
        <p className='text-2xl font-semibold md:text-3xl'>Estimated Salaries</p>
        <DateDisplay styles='md:text-lg mt-4 text-natural6 my-2 mb-7'/>

        <Formik
        initialValues={{ jobTitle: '', location: '', radius: '' }}
        onSubmit={async (values, {resetForm}) => {
            fetchData(
              encodeURIComponent(values.jobTitle), 
              encodeURIComponent(values.location), 
              values.radius,setShowChart,showToast,setOptions,setSearchData,setSeries,theme,isDarkMode,
            );
            resetForm();
        }}
    >
    <Form>
        <FieldComponent name='jobTitle' label='Job Title' extraClass='xl:mt-1' />
        <div className='flex w-full flex-col justify-center md:flex-row md:pt-5'>
          <FieldComponent name='location' label='Location' extraClass='md:mr-4' labelClass='mt-3 md:mt-0'/>
          <FieldComponent name='radius' label='Radius' extraClass='md:ml-4' labelClass='mt-3 md:mt-0 md:ml-4'/>
        </div>
        <div className='mt-10'>
            <Button isSubmit={true} additionalStyles={'h-10 w-full shadow text-white'}>Search</Button>
        </div>
    </Form>
    </Formik>
    </div>
    <div className='flex px-4 xl:px-0 xl:max-w-2xl max-w-5xl w-full'>
          <div className='mt-8 hover:shadow-lg dark:hover:-translate-y-0 hover:-translate-y-[1px] flex w-full h-[30rem] shadow xl:max-w-2xl max-w-5xl px-2 flex-col rounded-xl bg-white  pb-2.5 pt-5 dark:bg-blackBG2 sm:px-3 xl:mt-0'>
            <p className={`${!showChart && 'text-white dark:text-blackBG2'} text-lg mx-2 font-medium sm:text-xl`}>Estimate Monthly Salary <span className='font-light'>for</span> {searchData[0]?.job_title} <span className='font-light'>in</span> {searchData[0]?.location}</p>
            <div className={`my-3 ml-3 self-center flex flex-row ${!showChart && 'text-white dark:text-blackBG2'}`}>
                <div className={`mr-1.5 h-3 w-3 self-center rounded-full bg-secondary3 ${!showChart && 'bg-white dark:bg-blackBG2'}`}></div>
                <p className='mr-1.5 text-xs sm:mr-4 sm:text-sm'>Minimum Salary</p>
                <div className={`mr-1.5 h-3 w-3 self-center rounded-full bg-primary ${!showChart && 'bg-white dark:bg-blackBG2'}`}></div>
                <p className='mr-1.5 text-xs sm:mr-4 sm:text-sm'>Maximum Salary</p>
                <div className={`mr-1.5 h-3 w-3 self-center rounded-full bg-secondary4 ${!showChart && 'bg-white dark:bg-blackBG2'}`}></div>
                <p className='text-xs sm:text-sm'>Median Salary</p>
            </div>

            {showChart ? (
                <Chart options={options} series={series} type='bar' height='330'/>
            ) : (
                <div className='mb-24 flex items-center justify-center py-10'>
                    <HashLoader color={'#529cf1'} loading={true} size={150} speedMultiplier={2}/>
                </div>
            )}  
        </div> 
      </div>  
      </div>
    </div>
  )
};

export default EstimatedSalaries;