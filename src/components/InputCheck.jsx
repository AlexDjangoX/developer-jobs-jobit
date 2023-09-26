import {useState} from 'react'
import '../app/globals.css'

const InputCheck = ({typeOfCheck, placeholder, onClick, styles, errorMessage}) => {

    const [inputText, setInputText] = useState('')
    const [invalidInput, setInvalidInput] = useState(true);

  return (

    <div className='flex flex-col'>
        <input
            className={`mt-[20px] flex w-[210px] items-center rounded-[10px] border py-[11px] pl-[20px] text-[13px]  focus:ring-0 focus:ring-offset-0 ${styles} ${invalidInput ? 'error border-red-600 bg-red-200 text-red-600 focus:ring-red-600' : 'text-[#92929D]'}`}
            placeholder={placeholder}
            type={typeOfCheck}
            onChange={(e) => {
                setInputText(e.target.value);
                setInvalidInput(false);
                }}
            onClick={onClick}
            required
          />
        {invalidInput && (
            <div className='flex'>
                <div className='fade_In relative left-[5px] top-[2px] flex rounded-md bg-white p-2 text-black'>
                    <p className='text-[10px]'> 
                        {errorMessage} 
                    </p>
                </div>
            </div>
        )}

    </div>   
  )
}

export default InputCheck