import React from 'react';

import { useGetSearchResultsQuery } from '@/redux/services/jobApi';

const SearchQuery = () => {
  const hardQuery = 'Javascript developer in Manchester, UK';

  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetSearchResultsQuery(hardQuery);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>SearchQuery</div>;
};

export default SearchQuery;
