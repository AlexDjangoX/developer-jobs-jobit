'use client';

import '../../app/globals.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import DarkLightTheme from '../DarkLightTheme';
import Button from '../Button';
import { logo, union, close } from '../../../public/assets/svg-icons';

const routes = [
  { path: '/', label: 'Overview' },
  { path: '/job-search', label: 'Job Search' },
  { path: '/estimated-salaries', label: 'Estimated Salaries' },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMobileNav(false);
            } 
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }
}, []); 

  return (
      <div className='fixed z-50 flex h-16 w-full justify-between border-b-2 border-natural5 bg-white px-6 dark:border-blackBG3 dark:bg-blackBG lg:px-20'>
        {showMobileNav ? (
          <Link
          href={{
            pathname: '/',
          }}
          className='items-center flex'
        >
          <div className='flex items-center'>
            <Image src={logo} width={26} height={26} alt='logo'/>
            <p className='ml-1.5 text-lg font-extrabold text-primary'>JOBIT</p>
          </div>
        </Link>  

        ):(
          <Image src={union} width={24} height={24} alt='menu' className='flex md:hidden' onClick={() => setShowMobileNav(true)}/>
        )}

        <div className='hidden items-center md:flex '>
          <Link
            href={{
              pathname: '/',
            }}
          >
            <div className='flex items-center'>
              <Image src={logo} width={26} height={26} alt='logo'/>
              <p className='ml-1.5 text-lg font-extrabold text-primary'>JOBIT</p>
            </div>
          </Link>
        </div>

        <div className='hidden items-center md:flex'>
          {routes.map((route) => (
            <Link href={route.path} className='h-full'>
            <p className={`mx-3.5 flex h-full items-center font-medium text-natural6 ${pathname === route.path && 'border-b border-primary font-semibold text-primary'}`}>{route.label}</p>
          </Link>
          ))}
        </div>

        {!showMobileNav ? (
          <DarkLightTheme />
        ) : (
          <Image src={close} height={16} width={16} alt='X' onClick={() => setShowMobileNav(false)}/>
        )}

        {showMobileNav && (
          <>
            <div className={`fixed right-0 z-30 mt-16 flex h-full w-2/3 items-center bg-white p-3 dark:bg-blackBG md:hidden ${showMobileNav && 'mobile-nav-show'}`}>
              <div className='mb-20 flex w-full flex-col'>
                {routes.map((route) => (
                  <Link href={route.path} onClick={() => setShowMobileNav(false)}>
                  <Button variant='custom' additionalStyles={`font-light text-natural3 my-1 w-full py-3 pl-4 ${pathname === route.path && 'bg-natural dark:bg-blackBG3 font-medium text-primary'}`} justifyStart={true}>
                    {route.label}
                  </Button>
                </Link>
                ))}
                <div className='ml-4 mt-7 flex justify-start'>
                  <DarkLightTheme />
                </div>
              </div>
            </div>
            <div className='fixed inset-0 z-10 mt-16 bg-black opacity-30 dark:bg-white  dark:opacity-10' onClick={() => setShowMobileNav(false)}></div>
          </>
        )}
      </div>
  )
  }

export default Navbar;
