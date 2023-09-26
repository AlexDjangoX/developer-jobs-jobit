const fetchLocationFromAPI = async (ipAddress) => {
  const apiKey = process.env.GEOLOCATION_API;
  const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();
    return {
      city: data.location.region,
      country: data.location.country,
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error;
  }
};

export const getUserGeolocation = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    const { city, country } = await fetchLocationFromAPI(ipAddress);

    const defaultCity = city || 'Edinburgh';
    const defaultCountry = country || 'Scotland';

    return { city: defaultCity, country: defaultCountry };
  } catch (error) {
    console.error('Error getting geolocation:', error);
    return { city: 'Edinburgh', country: 'Scotland' };
  }
};
