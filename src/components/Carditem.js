import React from 'react'
import {CARD_URL }from "../utils/constant"

const Carditem = (props) => {
  const { resp } = props
  const { name, avgRatingString, cuisines, locality, cloudinaryImageId } = resp.info
  return (
    <div className='h-56 w-64 px-2 ml-4 mb-28'>
      <img
        className='rounded-2xl h-48 w-72'
        alt='food'
        src={CARD_URL+cloudinaryImageId} />

      <h3 className=' mt-2 font-bold text-lg text-gray-'>{name}</h3>
      <h2 className=' text-sm text-blue-950'>{cuisines.join(",")}</h2>
      <h2 className='font-semibold text-sm text-blue-950'>{locality}</h2>
      <h3 className=''>{avgRatingString}</h3>

    </div>
  )
}

export default Carditem