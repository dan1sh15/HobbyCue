import React, { useState } from 'react';
import google from '../assets/google.png';
import fb from '../assets/facebook.png';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
import homeImg from '../assets/homeImage.png';

const Home = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [signIn, setSignIn] = useState(true);

  return (
    <section className='min-h-[80vh] bg-[#F7F5F9]'>
      <div className='w-10/12 h-full mx-auto pt-20 flex flex-col gap-y-10'>
        <div className='flex justify-center gap-x-10 max-ipad:flex-col max-ipad:gap-y-10'>
            <div className='flex flex-col gap-y-7 max-phone:gap-y-5 w-[50%] max-ipad:w-full justify-between h-full'>
                <h1 className='text-[2.25rem] italic font-bold max-ipad:text-3xl max-phone:text-2xl'>Explore you <span className='text-blue-500'>hobby</span> or <span className='text-[#8064A2]'>passion</span></h1>
                <div className='flex flex-col gap-y-3 text-lg text-[#6D747A] max-ipad:text-[1rem]'>
                    <p>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                    </p>
                    <p>
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                    </p>
                </div>

            </div>

            <div className='w-[50%] max-ipad:w-full' >
                <div className='flex flex-col gap-y-5 w-[70%] max-xl:w-[100%] mx-auto p-7 items-center'>
                    <div className='flex gap-x-3 w-full justify-start text-xl'>
                        <button onClick={() => {
                            setSignIn(true);
                        }} className={`${signIn ? 'text-[#8064a2] border-b-2 border-b-[#8064a2] font-semibold' : 'text-[#939CA3]'} `}>Sign In</button>
                        <button onClick={() => {
                            setSignIn(false);
                        }} className={`${signIn ? 'text-[#939CA3]' : 'text-[#8064a2] border-b-2 border-b-[#8064a2] font-semibold'}`}>Join In</button>
                    </div>

                    <div className='border border-[#8064A2] rounded-lg w-full flex items-center px-5 py-2 cursor-pointer hover:bg-[#8064a2] hover:text-white transition-all duration-300 ease-linear'>
                        <img src={google} className='w-[1rem] h-[1rem]' alt="" />
                        <p className='font-semibold w-full text-center'>Continue with Google</p>
                    </div>

                    <div className='border border-[#8064A2] rounded-lg w-full flex items-center px-5 py-2 cursor-pointer hover:bg-[#8064a2] hover:text-white transition-all duration-300 ease-linear'>
                        <img src={fb} className='w-[1rem] h-[1rem]' alt="" />
                        <p className='font-semibold w-full text-center'>Continue with Facebook</p>
                    </div>

                    <div className='w-full flex gap-x-2 items-center'>
                        <div className='h-1 bg-[#CED4DA] w-full' />
                        <p className='w-full font-semibold text-sm text-center'>Or connect with</p>
                        <div className='h-1 bg-[#CED4DA] w-full' />
                    </div>
                    
                    <form className='flex flex-col gap-y-5 w-full'>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className='bg-white outline-none rounded-lg px-3 py-2 border'
                            placeholder='Email' 
                        />
                        <label htmlFor="" className='flex items-center bg-white w-full rounded-lg px-3 py-2 border'>
                            <input 
                                type={`${showPassword ? 'text' : 'password'}`} 
                                name='password'
                                id='password'
                                className='transparent outline-none w-full'
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
                                <p className='text-xs'>By continuing, you agree to our <span className='font-semibold'>Terms of Service</span> and <span className='font-semibold'>Privacy Policy</span>.</p>
                            )
                        }

                        {
                            signIn ? (<button className='px-5 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300 ease-linear font-semibold'>
                                Continue
                            </button>) : (<button className='px-5 py-2 rounded-lg bg-[#8064a2] text-white transition-all duration-300 ease-linear font-semibold'>
                            Agree and Continue
                        </button>)
                        }
                    </form>
                </div>
            </div>
        </div>

        <img src={homeImg} loading='lazy' className='w-[50%] max-ipad:w-full h-full ml-0' alt="" />
      </div>
    </section>
  )
}

export default Home
