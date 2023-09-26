import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { getUserGeolocation } from '@/utils/geolocation.utils';
import HomePage from '@/components/sections/HomePage';

config.autoAddCss = false;

export default async function Home() {
  const { city, country } = await getUserGeolocation();

  const defaultQuery = `Java developer in ${city}, ${country}`;

  return <HomePage query={defaultQuery} />;
}
