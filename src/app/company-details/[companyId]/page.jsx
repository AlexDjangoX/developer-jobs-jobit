import React from 'react'
import CompanyDetails from '@/components/sections/companyDetails'

const page = ({params}) => {
  return (
    <CompanyDetails companyName={params.companyId}/>
  )
}

export default page
