import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { BsSearch, BsFillCompassFill, BsFillBookmarkStarFill, BsBookmarkFill, BsBellFill, BsFillCartFill, BsChevronDown } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import google from '../assets/google.png';
import fb from '../assets/facebook.png';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

const Navbar = () => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);
    const [signIn, setSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='w-full h-[80px] flex items-center shadow-xl relative'>
      <div className='w-11/12 mx-auto flex justify-between gap-x-10 max-xl:gap-x-6'>

        <div className='flex items-center gap-x-7 max-xl:gap-x-5 max-ipad:w-full'>
            <img className='w-[300px] h-[60px] object-contain' src={logo} loading='lazy' alt="" />
            <label htmlFor="" className='flex items-center bg-[#F8F9FA] w-[40%] border rounded-lg max-[1200px]:hidden'>
                <input 
                    type="text" 
                    placeholder='Search here...'
                    className='bg-transparent outline-none px-5 py-2 w-full'
                />
                <button className='h-full bg-[#8064A2] text-[#fff] p-3 rounded-r-lg'>
                    <BsSearch />
                </button>
            </label>
        </div>

        <div className=' flex items-center gap-x-7 justify-between max-xl:gap-x-5 max-ipad:w-fit max-ipad:justify-end' >

            <FaSearch className='hidden max-[1200px]:flex text-lg text-[#8064A2] max-ipad:text-xl' />

            <div className='flex items-center gap-x-5 max-xl:gap-x-3 max-ipad:hidden'>
                <div className='flex items-center gap-x-2 '>
                    <BsFillCompassFill className='text-[#8064A2]' />
                    <div className='flex relative items-center gap-x-2'>
                        <p onClick={() => {
                            setShowDropDown(!showDropDown);
                        }} className='flex gap-x-2 items-center cursor-pointer select-none'>Explore <BsChevronDown  className=''/></p>

                        {
                                showDropDown && <div className='absolute flex flex-col gap-x-3 bg-white rounded-lg text-sm top-7 -left-10 w-[220px] items-start border'>
                                <button className='border-b p-2 w-full text-start'>People - Community</button>
                                <button className='border-b p-2 w-full text-start'>Places - Venues</button>
                                <button className='border-b p-2 w-full text-start'>Programs - Events</button>
                                <button className='border-b p-2 w-full text-start'>Products - Store</button>
                                <button className='p-2 w-full text-start'>Blogs</button>
                            </div>
                        }
                    </div>
                </div>

                <div className='flex items-center gap-x-2 max-ipad:hidden'>
                    <BsFillBookmarkStarFill className='text-[#8064A2]' />
                    <div>
                        <p className='flex gap-x-2 items-center cursor-pointer select-none'>Hobbies <BsChevronDown  className=''/></p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-x-5 text-[#8064A2] text-lg'>
                <BsBookmarkFill className='cursor-pointer hover:scale-[1.03] transition-all duration-300 ease-linear max-ipad:hidden' />
                <BsBellFill className='cursor-pointer hover:scale-[1.03] transition-all duration-300 ease-linear max-ipad:text-xl' />
                <BsFillCartFill className='cursor-pointer hover:scale-[1.03] transition-all duration-300 ease-linear max-ipad:hidden' />
            </div>

            <button className='text-[#8064A2] border-2 border-[#8064A2] rounded-lg px-5 py-1 hover:text-white hover:bg-[#8064A2] transition-all duration-300 ease-linear max-ipad:hidden'>
                Sign In
            </button>

            <button className='ipad:hidden'>
                {
                    showLogIn ? (<ImCross onClick={() => {
                        setShowLogIn(false);
                    }} className='text-[#8064A2] text-xl' />) : (<GiHamburgerMenu onClick={() => {
                        setShowLogIn(true);
                    }} className='text-[#8064A2] text-xl' />)
                }
            </button>
        </div>

      </div>

      <div className={` ipad:hidden absolute w-full z-10 bg-white shadow-2xl ${showLogIn ? 'top-[80px]' : '-top-[900px]'} transition-all duration-300 ease-linear`}>
        <div className='w-[50%] max-ipad:w-full' >
            <div className='flex flex-col gap-y-5 w-[70%] max-xl:w-[100%] mx-auto p-7 items-center'>
                <div className='flex gap-x-10 w-full justify-center text-xl'>
                    <button onClick={() => {
                        setSignIn(true);
                    }} className={`${signIn ? 'text-[#8064a2] border-b-2 border-b-[#8064a2] font-semibold' : 'text-[#939CA3]'} `}>Sign In</button>
                    <button onClick={() => {
                        setSignIn(false);
                    }} className={`${signIn ? 'text-[#939CA3]' : 'text-[#8064a2] border-b-2 border-b-[#8064a2] font-semibold'}`}>Join In</button>
                </div>


                <form className='flex flex-col gap-y-5 w-full'>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className='bg-[#EBEDF0] outline-none rounded-lg px-3 py-2 border'
                        placeholder='Email' 
                    />
                    <label htmlFor="" className='flex items-center bg-[#EBEDF0] w-full rounded-lg px-3 py-2 border'>
                        <input 
                            type={`${showPassword ? 'text' : 'password'}`} 
                            name='password'
                            id='password'
                            className='bg-transparent  outline-none w-full'
                            placeholder='Password'
                        />
                        {
                            showPassword ? (<FaRegEyeSlash onClick={() => {
                                setShowPassword(false);
                            }} className='text-[#6D747A] text-lg cursor-pointer' />) : (<FaEye onClick={() => {
                                setShowPassword(true);
                            }} className='text-[#6D747A] text-lg cursor-pointer' />)
                        }
                        
                    </label>

                    {
                        signIn ? (
                            <div className='w-full flex justify-between items-center text-xs'>
                                <div className='flex items-center gap-x-2'>
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>


                                <div className='flex items-center gap-x-2'>
                                    <MdLock className='text-[#6D747A] text-lg' />
                                    <p>Forgot password?</p>
                                </div>
                            </div>
                        ) : (
                            <p className='text-xs text-center'>By continuing, you agree to our <span className='font-semibold'>Terms of Service</span> and <span className='font-semibold'>Privacy Policy</span>.</p>
                        )
                    }

                    {
                        signIn ? (<button className='px-5 py-2 rounded-lg bg-[#8064a2] text-white transition-all duration-300 ease-linear font-semibold'>
                            Continue
                        </button>) : (<button className='px-5 py-2 rounded-lg bg-[#8064a2] text-white transition-all duration-300 ease-linear font-semibold'>
                        Agree and Continue
                    </button>)
                    }
                </form>
                <div className='w-full flex gap-x-2 items-center'>
                    <div className='h-1 bg-[#CED4DA] w-full' />
                    <p className='w-full font-semibold text-sm text-center'>Or connect with</p>
                    <div className='h-1 bg-[#CED4DA] w-full' />
                </div>
                
                <div className='border border-[#8064A2] rounded-lg w-full flex items-center px-5 py-2 cursor-pointer hover:bg-[#8064a2] hover:text-white transition-all duration-300 ease-linear'>
                    <img src={google} className='w-[1rem] h-[1rem]' alt="" />
                    <p className='font-semibold w-full text-center'>Continue with Google</p>
                </div>

                <div className='border border-[#8064A2] rounded-lg w-full flex items-center px-5 py-2 cursor-pointer hover:bg-[#8064a2] hover:text-white transition-all duration-300 ease-linear'>
                    <img src={fb} className='w-[1rem] h-[1rem]' alt="" />
                    <p className='font-semibold w-full text-center'>Continue with Facebook</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
