import React, { useEffect, useRef, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navber = () => {
 const { user} = useContext(AppContext);
  const navigate = useNavigate()
  const profileIconRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const handleLogout = () => {
    setUser(false);
    navigate('/login');
  }

  const toggleDropdown = () => {
    dropdownMenuRef.current.classList.toggle('hidden');
  };

  useEffect(() => {
    const profileIcon = profileIconRef.current;
    if (profileIcon) {
      profileIcon.addEventListener('click', toggleDropdown);
    }
    return () => {
      if (profileIcon) {
        profileIcon.removeEventListener('click', toggleDropdown);
      }
    };
  }, []);

  return (
    <div className='flex justify-between items-center p-4'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-20 h-20 cursor-pointer' />
      </Link>
      <div>
        {user ? (
          <div className='flex items-center gap-4 relative'>
            <button className='flex items-center gap-2 bg-[#6e6ea849] px-4 py-2 rounded-full text-sm text-black hover:scale-105 transition-all duration-700'>
              <img className='w-5' src={assets.credit_star} alt="Credits" />
              <p className='text-black text-xs lg:text-sm'>Credits left: 10</p>
            </button>
            <p className='text-black lg:text-sm md:block hidden'>Hi Shishir</p>
            <div className='flex items-center gap-2 group'>
              <img ref={profileIconRef} className='w-8 drop-shadow-lg' src={assets.profile_icon} alt="User" />
              <div ref={dropdownMenuRef} className='absolute top-[3rem] right-0 bg-white p-4 rounded-lg hidden' >
                <ul className='flex flex-col gap-2 justify-start'>
                  <li className='cursor-pointer flex items-center gap-5 pr-3'><span>Account</span> <img onClick={toggleDropdown} className=' w-[.7rem]' src={assets.cross_icon} alt="Close" /></li>
                  <li className='cursor-pointer'>Settings</li>
                  <li className='cursor-pointer'>Billing</li>
                  <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
                  <li className='cursor-pointer' onClick={toggleDropdown}>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-4 cursor-pointer'>
            <p onClick={() => navigate('/buy')} className='text-black text-sm lg:text-lg'>Pricing</p>
            <button onClick={() => navigate('/login')} className='bg-black text-white md:px-10 md:py-3 px-4 py-2 hover:scale-105 transition-all duration-700  rounded-full '>Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navber
