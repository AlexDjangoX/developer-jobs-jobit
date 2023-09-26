import { Field } from "formik"

export const FieldComponent = ({name, label, extraClass, labelClass}) => (
    <div className='flex w-full flex-col pr-0'>
      <label className={`mb-4 text-sm text-natural6 dark:text-natural5 xl:mt-1 ${labelClass}`}>{label}</label>
      <Field name={name} className={`mb-6 h-10 rounded-xl border border-natural2 bg-natural2 px-5 py-3 text-sm font-semibold outline-none focus:ring-0 dark:border-naturalColor dark:bg-blackBG2 dark:text-natural3 md:mb-0 ${extraClass}`} />
    </div>
  )