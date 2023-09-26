'use client';

import React, { useReducer, useEffect, useState } from 'react';
import Image from 'next/image';
import { arrowLeft, arrowRight } from '/public/assets/svg-icons/index.js';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      if (state.currentPage === 10) {
        return { currentPage: 10 };
      }
      return { ...state, currentPage: state.currentPage + 1 };
    case 'decrement':
      if (state.currentPage === 1) {
        return { currentPage: 1 };
      }
      return { ...state, currentPage: state.currentPage - 1 };
    case 'set':
      return { ...state, currentPage: action.page };
    default:
      throw new Error();
  }
}

const Pagination = ({ setPagesByTens, lastPage }) => {
  const initialState = {
    currentPage: Number(localStorage.getItem('currentPage')) || 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pages, setPages] = useState(lastPage || 10);

  useEffect(() => {
    setPagesByTens(state.currentPage);
    localStorage.setItem('currentPage', state.currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (lastPage) {
      setPages(lastPage);
    }
  });

  const handleButton = (e) => {
    const { action, page } = e.currentTarget.dataset;

    if (action === 'set') {
      const newPage = Number(page);
      dispatch({ type: action, page: newPage });
    } else {
      dispatch({ type: action });
    }
  };

  return (
    <nav className="flex border-t dark:border-t-natural3 items-center pt-5 mt-8 mb-16 justify-between px-4 sm:px-0">
      <div className="-mt-px flex items-center w-0 flex-1">
        <button
          data-action="decrement"
          onClick={handleButton}
          disabled={state.currentPage === 1}
          className="sm:inline-flex dark:bg-blackBG2 hidden text-naturalColor dark:text-natural5 items-center px-3.5 py-2 border-t-2 border-transparent bg-white rounded-lg hover:shadow-lg shadow text-sm font-semibold cursor-pointer"
        >
          <Image
            src={arrowLeft}
            width={20}
            height={20}
            alt="arrow-left"
            className="mr-2"
          />
          <p aria-hidden="true" />
          Previous
        </button>
      </div>
      <div className="md:-mt-px md:flex">
        {[...Array(pages)].map((_, index) => (
          <p
            data-page={index + 1}
            data-action="set"
            onClick={handleButton}
            key={`page-${index + 1}`}
            className={`inline-flex items-center justify-center text-sm font-medium cursor-pointer ${
              index + 1 === state.currentPage
                ? 'bg-primary text-white rounded-md'
                : 'text-gray-500'
            }`}
            style={{ minWidth: '30px', minHeight: '30px' }}
          >
            {index + 1}
          </p>
        ))}
      </div>
      <div className="-mt-px flex justify-end items-center w-0 flex-1">
        <button
          data-action="increment"
          onClick={handleButton}
          disabled={lastPage}
          className="sm:inline-flex hidden dark:bg-blackBG2 items-center  
          px-3.5 py-2 bg-white text-naturalColor dark:text-natural5 rounded-lg shadow hover:shadow-lg border-t-2 border-transparent text-sm font-semibold"
        >
          Next
          <Image
            src={arrowRight}
            width={20}
            height={20}
            alt="arrow-right"
            className="ml-2"
          />
          <p aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;