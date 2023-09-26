'use client';

import React, { useState } from 'react';
import Image from 'next/image.js';

import { cheveron } from '../../../public/assets/svg-icons/index';
import { useFilterOptions } from '@/utils/hooks/useFilterOptions';

const CountSpan = ({ className, count, option }) =>
  count && <span className={className}>{count[option]}</span>;

const CheckBoxCounts = ({ counts, option, optionSize }) => {
  const className = 'text-sm font-bold text-naturalColor dark:text-natural5';

  return (
    <div className="flex justify-between w-full">
      <span
        className={`${optionSize} ml-3 mb-1 text-naturalColor dark:text-natural5`}
      >
        {option}
      </span>
      {counts.map((count, index) => (
        <CountSpan
          key={index}
          className={className}
          count={count}
          option={option}
        />
      ))}
    </div>
  );
};

const DropdownHeader = ({ label, labelSize, isOpen, toggleOpen }) => (
  <div
    className="relative flex justify-between items-center cursor-pointer"
    onClick={toggleOpen}
  >
    <span className={`dark:text-white ${labelSize} font-semibold`}>
      {label}
    </span>
    <Image
      className="cursor-pointer"
      src={cheveron}
      alt="icon-cheveron"
      height={20}
      width={20}
      style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
    />
  </div>
);

const DropDown = ({
  label,
  options,
  fieldName,
  isAbsolute = false,
  labelSize,
  optionSize,
  ...counts
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOptions, handleChange } = useFilterOptions(fieldName);
  const countsArray = Object.values(counts);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="my-3 flex items-center w-full justify-between rounded-md">
      <div className="flex flex-col w-full">
        <DropdownHeader
          label={label}
          labelSize={labelSize}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
        {isOpen && (
          <div
            className={`mt-3 font-medium ${
              isAbsolute
                ? 'w-40 absolute bg-white dark:bg-blackBG2 translate-y-6 -translate-x-20'
                : 'flex w-full'
            } flex-col items-start`}
          >
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center w-full cursor-pointer px-2 py-1"
              >
                <div className="flex justify-between w-full">
                  <div className="flex items-center w-full">
                    <input
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleChange(option)}
                      style={{ display: 'none' }}
                    />
                    <span
                      className={`custom-checkbox  ${
                        selectedOptions.includes(option) ? 'checked' : ''
                      }`}
                    ></span>
                    <CheckBoxCounts
                      optionSize={optionSize}
                      counts={countsArray}
                      option={option}
                    />
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
