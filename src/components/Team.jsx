import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

import Header from './Header'
import Footer from './Footer'

import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import person6 from '../images/person6.png'
import person7 from '../images/person7.png'
import person8 from '../images/person8.png'
import person9 from '../images/person9.png'
import badge from '../images/badge.png'


function Project() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col m-16'>
            <h1 className='text-8xl font-bold uppercase'>People Don't Buy What You do, they buy why you do it</h1>
            <div className='flex flex-row m-16 items-center gap-4'>
                <button disabled='disabled' className='border border-[#EF4823] text-[#EF4823] rounded-[30px] px-[20px] py-[1px]'>Design</button>
                <button disabled='disabled' className='border border-slate-600 rounded-[30px] px-[20px] py-[1px]'>Development</button>
                <button disabled='disabled' className='border border-slate-600 rounded-[30px] px-[20px] py-[1px]'>Digital Marketing</button>
                <button disabled='disabled' className='border border-slate-600 rounded-[30px] px-[20px] py-[1px]'>SEO</button>
                <div className='bg-[#2A2A2A] h-[1px] w-[50%]'></div>
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-8 ml-24 mr-24 mt-16 mb-24'>
            <div className='relative'>
                <div>
                    <img src={person1} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row  justify-center text-center '>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='font-bold text-3xl text-transparent text-black'>Firefox Org</h1> */}
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person2} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>                       <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person3} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person4} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person5} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person6} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person7} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person8} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={person9} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-[200px] w-[10%] bg-white/20'>
                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center'>
                        <div className='flex flex-col text-[#EF4823] justify-evenly gap-8 mb-4 items-center'>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            <BsTwitter/>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            {/* <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#1C1C1C] mt-16 mb-16'>
            <div className='flex flex-row items-center justify-between m-16'>
                <h1 className=' mt-16 mb-16 w-1/2 font-bold uppercase text-8xl text-[#C4C4C4]'>Let’s start something new together</h1>
                <div className='flex mt-16 mb-16'>
                    <img src={badge} alt="" />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Project