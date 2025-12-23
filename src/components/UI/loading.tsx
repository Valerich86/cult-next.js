import { TbFidgetSpinner } from "react-icons/tb"; 
import React from 'react'

export default function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <TbFidgetSpinner size={50} color="gray" className="animate-spin"/>
    </div>
  )
}
