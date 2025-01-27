import React from 'react'
import {Link} from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6";

const BackButton = ({destination = '/'}) => {

  return (
    <div className='flex'>
      <Link to={destination} className='bg-green-600 text-white px-1 py-1 rounded-lg w-fit'>
      <FaCircleArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton;