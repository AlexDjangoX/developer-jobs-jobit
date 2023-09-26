import React from 'react';

import { getUserGeolocation } from '@/utils/geolocation.utils';
import JobSearchPage from '@/components/sections/JobSearchPage';

export default async function Page() {
  const { city, country } = await getUserGeolocation();

  const defaultQuery = `Javascript developer in ${city}, ${country}`;

  return <JobSearchPage query={defaultQuery} />;
}
