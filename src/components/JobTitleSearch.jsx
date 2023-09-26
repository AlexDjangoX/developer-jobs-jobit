'use client'

import '../app/globals.css'
import {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {v4 as uuidv4} from 'uuid';

import Button from './Button';
import { useToast } from '@/utils/hooks/useToast';

const JobTitleSearch = ({handleSearch, setSearchText, setSeeAll}) => {
    const {dispatch} = useToast();
    const [inputText, setInputText] = useState('')
    const [invalidInput, setInvalidInput] = useState(false);
    const [emptyMessage, setEmptyMessage] = useState(false)

    const showToast = (type, title, message) => { return dispatch({
      type: "ADD_NOTIFICATION",
      payload: {id: uuidv4(), type, title, message}
    })}

    const handleClick = (e) => {
        e.preventDefault();
        if (inputText === "") {
          setInvalidInput(false);
          setTimeout(() => setInvalidInput(true),0)
          showToast('ERROR', 'Empty Input', 'Please enter a search')
          return;
        }
    
        const validLettersAndSpacesRegex = /^(?:[a-z][a-z\s]*)?$/i;
            
        if(!inputText.match(validLettersAndSpacesRegex)){
          setInvalidInput(false);
          setTimeout(() => setInvalidInput(true),0)
          showToast('ERROR', 'Empty Input', 'Please enter a valid search')
        } else {
          setSearchText(inputText);
          handleSearch(inputText);
          setSeeAll(true);
        }
      }

  return (
    <div className={`flex justify-start rounded-2xl sm:w-4/5 md:w-3/5${emptyMessage && 'border border-red-600 bg-red-200 px-2 py-1.5'} ${invalidInput && 'border border-red-600 bg-red-200 px-2 py-1.5'} bg-natural4 p-2 dark:bg-blackBG3`}>
          <div className={`flex w-full flex-row justify-evenly ${invalidInput && 'error border-red-600'} ${emptyMessage && 'error border-red-600'}`}>
            <div className="flex items-center">
              <AiOutlineSearch width={30} height={30} className={`ml-2 ${emptyMessage || invalidInput ? 'text-red-600' : 'text-slate-500'}`}/>
            </div>
            <div className='flex w-full flex-row justify-between'>
              <form className='flex w-full flex-row'>
                <input
                  className={`ml-2 mr-3 flex w-full bg-natural4 text-sm text-natural6 outline-none dark:bg-blackBG3 sm:text-[14px] ${invalidInput ? 'error border-red-600 bg-red-200 text-red-600 placeholder:text-red-600 focus:ring-red-600' : 'text-natural6'} ${emptyMessage ? 'error border-red-600 bg-red-200 placeholder:text-red-600 focus:ring-red-600' : 'text-natural6'}`}
                  placeholder="Search Job title or Keyword"
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setInvalidInput(false);
                    setEmptyMessage(false);
                    }}
                  onSubmit={() => handleClick}
                  />
                <Button variant='default' additionalStyles='h-8 w-20 text-sm text-white'
                onClick={handleClick} isSubmit>
                  Search
                </Button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default JobTitleSearch