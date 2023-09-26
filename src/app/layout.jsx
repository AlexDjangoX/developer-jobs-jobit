import React from 'react';
import Script from 'next/script';
import { Manrope } from 'next/font/google';

import './globals.css';
import Provider from './providers/Provider';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { ToastContextProvider } from '../context/toastContext';
import Toast from '@/components/Toast';
import Navbar from '@/components/Navbar/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['variable'],
});

export const metadata = {
  title: 'Jobit',
  description: 'Job Search Platform for Developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
      ></Script>
      <body className={`${manrope.className} bg-natural4 dark:bg-blackBG`}>
        <ReduxProvider>
          <ToastContextProvider>
            <Toast autoDeleteInterval={4000} />
            <Provider>
              <Navbar />
              {children}
            </Provider>
          </ToastContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
