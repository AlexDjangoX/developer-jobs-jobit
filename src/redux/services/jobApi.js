import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiHost = 'jsearch.p.rapidapi.com';
const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${rapidApiHost}/`,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', rapidApiHost);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: ({ query, pages, numPages }) => {
        const searchQuery = `search?query=${query}&page=${String(
          pages
        )}&num_pages=${String(numPages)}`;

        return searchQuery;
      },
    }),

    getSearchFilters: builder.query({
      query: (searchQuery) =>
        `search-filters?query=${encodeURIComponent(searchQuery)}`,
    }),


    // getSearchFilters: builder.query({
    //   query: ({query}) => {
    //     console.log(query);
    //     return `search-filters?${params.toString()}`;
    //   },
    // }),

    getJobDetails: builder.query({
      query: (jobId) =>
        `job-details?job_id=${jobId}&extended_publisher_details=false`,
    }),

    getEstimatedSalary: builder.query({
      query: ({ jobTitle, location, radius }) =>
        `estimated-salary?job_title=${jobTitle}&location=${location}&radius=${radius}`,
    }),
  }),
});

export const {
  useGetSearchResultsQuery,
  useGetSearchFiltersQuery,
  useGetJobDetailsQuery,
  useGetEstimatedSalaryQuery,

  getSearchResults,
  usePrefetch,
} = jobApi;
