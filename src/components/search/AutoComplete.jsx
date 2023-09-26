'use client';

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

import { pin } from '../../../public/assets/svg-icons';
import { parseAddress } from '@/utils/autoComplete.utils';
import { updateField } from '@/redux/features/searchJobsSlice';

const AutoComplete = () => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state?.searchJobs);

  const handleChange = useCallback(
    (newAddress) => {
      dispatch(updateField({ name: 'address', value: newAddress }));
    },
    [dispatch]
  );

  const handleSelect = useCallback(
    async (value) => {
      const result = await geocodeByAddress(value);
      const parsedAddress = await parseAddress(result[0].address_components);
      dispatch(updateField({ name: 'address', value: parsedAddress }));
    },
    [dispatch]
  );

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="flex w-full">
          <div className="flex flex-1 flex-row px-5 md:px-0 py-3 border-b border-natural2 dark:border-naturalColor md:border-b-0 md:py-0">
            <Image
              className="mr-3"
              src={pin}
              alt="icon-sun"
              height={28}
              width={28}
            />
            <input
              {...getInputProps({
                placeholder: 'Select Location',
                className:
                  'w-full flex font-semibold text-sm dark:bg-blackBG2 border-natural2 dark:border-naturalColor border-r-0 md:border-r text-natural6 outline-none md:mr-3 lg:mr-10',
              })}
            />
          </div>
          <div className="absolute translate-y-16 z-10 max-h-40 overflow-auto">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item bg-white dark:bg-blackBG2';

              const style = suggestion.active
                ? {
                    backgroundColor: '#529cf1',
                    cursor: 'pointer',
                    color: 'white',
                  }
                : { cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  key={index}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default AutoComplete;
