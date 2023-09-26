'use client';

import { useMemo } from 'react';

import { useGetSearchResultsQuery, usePrefetch } from '@/redux/services/jobApi';
import { processResults } from '@/utils/process-api-data/processResults';
import { countJobsTimeRange } from '@/utils/process-job-search/countJobsTimeRange';
import { countJobRequirements } from '@/utils/process-job-search/countJobRequirements';
import { countJobTypes } from '@/utils/process-job-search/countJobTypes';
import { countRemoteJobs } from '@/utils/process-job-search/countRemoteJobs';

export const useJobSearch = (query, pages = 1, numPages = 1) => {
  const prefetchSearchResults = usePrefetch('getSearchResults');
  const fetchNext = pages + 1;
  prefetchSearchResults({
    query,
    pages: fetchNext,
    numPages,
  });

  const {
    data: searchResults,
    error,
    isFetching,
    isLoading,
  } = useGetSearchResultsQuery({
    query,
    pages,
    numPages,
  });

  const results = useMemo(() => processResults(searchResults), [searchResults]);

  const countData = useMemo(() => {
    if (!results) {
      return {};
    }

    return {
      countByTimeRange: countJobsTimeRange(results),
      countByJobTypes: countJobTypes(results),
      countByJobRequirements: countJobRequirements(results),
      countByRemoteJobs: countRemoteJobs(results),
    };
  }, [results]);

  const lastPage = useMemo(() => {
    if (results && results.length < 10) {
      return pages;
    } else {
      return null;
    }
  }, [results, pages]);

  return {
    results,
    error,
    isFetching,
    isLoading,
    countData,
    lastPage,
    query,
  };
};
