'use client'

import { ToastContext } from '@/context/toastContext'
import { useContext} from 'react'
import {FaCheck, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle} from "react-icons/fa"
import {HiOutlineX} from "react-icons/hi"

import '../app/globals.css';

const Toast = ({autoDeleteInterval}) => {
    const {state, dispatch} = useContext(ToastContext);

    const generateIcon = (type) => {
        switch (type){
            case "INFO":
                return <FaInfoCircle />;
            case "WARNING":
                return <FaExclamationTriangle />
            case "ERROR":
                return <FaExclamationCircle />
            case "SUCCESS":
                return <FaCheck />
            default:
        }
    }

    const generateBackgroundColor = (type) => {
        switch (type){
            case "INFO":
                return 'bg-blue-400';
            case "WARNING":
                return 'bg-amber-400';
            case "ERROR":
                return 'bg-red-400';
            case "SUCCESS":
                return 'bg-green-400';
            default:
        }
    }
  return (
    <div className='fixed right-3 top-20 z-10 box-border text-sm font-normal'>
        {state.map((toast, index) => {
            if(autoDeleteInterval) {
                setInterval(() => {
                    dispatch({
                        type: "DELETE_NOTIFICATION",
                        payload: toast.id,
                    })
                }, autoDeleteInterval)
            }
            return (
                <div key={toast.id} className={`relative mx-1.5 mb-4 max-h-28 w-full overflow-hidden rounded-sm p-5 text-white opacity-90 shadow shadow-black transition ease-in-out hover:cursor-pointer hover:opacity-100 hover:shadow-lg sm:w-96 ${generateBackgroundColor(toast.type)} toast_enter_right`}>
                    <HiOutlineX 
                        className='absolute right-2 top-1 text-xl'
                        onClick={() => {
                            dispatch({type: "DELETE_NOTIFICATION", payload: toast.id});
                            }}
                    />
                    <div className='float-left mr-4 text-4xl'>
                        {generateIcon(toast.type)}
                    </div>
                    <div>
                        <p className='mb-1.5 mt-0 h-5 w-72 text-left text-[16px] font-bold'>{toast.title}</p>
                        <p className='m-0 h-5 truncate text-left'>{toast.message}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Toast