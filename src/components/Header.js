import React, { useState } from 'react'
import { AVTAR_URL, LOGO_URL } from '../utils/constant'
import AccessTimeIcon from '@mui/icons-material/AccessTime';




const Header = () => {
  const [tog,setTog] = useState("Login")

  const toggele=()=>{
    if(tog === "Login"){
      setTog("Logout")
    }else{
      setTog("Login")
    }
    
  }

  return (
    <div className=' flex h-50 w-auto bg-white justify-between pt-4 shadow-sm'>
      <div  className=' flex ml-20 justify-center items-center '>
        <img className='h-12 w-32' src="/Swiggy-Logo.png"></img>
        <h2 className=' underline underline-offset-8 font-semibold text-sm'>Other</h2>
        <select className=''></select>
      </div>
      <div className='flex ml-96'>
        <ul className='flex'>
        
          <li className='mr-12 font-bold text-md cursor-pointer'> 
          Swiggy Corporate</li>
          <li className='mr-12 font-bold text-md cursor-pointer'>About </li>
          <li className='mr-12 font-bold text-md cursor-pointer'>Contact Us </li>
          <li className='mr-12 font-bold text-md cursor-pointer'>Cart</li>
          <li className='mr-12 font-bold text-md cursor-pointer'>Blog</li>
          <li className='mr-12 font-bold text-md cursor-pointer' onClick={toggele}>{tog}</li>
          
        </ul>
      </div>
      <div className='mr-10'>
      <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white cursor-pointer"
          src={AVTAR_URL}
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default Header