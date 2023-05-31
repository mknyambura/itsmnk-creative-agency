import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from 'react-icons/bs'

import Header from './Header'
import Footer from './Footer'

import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'
import project7 from '../images/project7.png'
import project8 from '../images/project8.png'
import project9 from '../images/project9.png'
import project10 from '../images/project10.png'
import project11 from '../images/project11.png'
import project12 from '../images/project12.png'
import project13 from '../images/project13.png'
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
        <div className='grid grid-cols-3 gap-8 ml-24 mr-24 mt-16 mb-24'>
            <div className='relative'>
                <div>
                    <img src={project1} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project2} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project3} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project4} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project5} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project6} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project7} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project8} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project9} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project10} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project11} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project12} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div>
                    <img src={project13} alt="" className='h-full w-full object-cover '/>
                </div>
                <div className='absolute inset-0 opacity-80 h-1/4 bottom-0 hover:bg-white'>

                    <div className='absolute inset-0 flex flex-row items-center justify-center text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                        <div className='flex flex-row'>
                            <h1 className='font-bold text-3xl text-transparent hover:text-black'>Firefox Org</h1>
                            {/* <h1 className='text-transparent font-bold hover:text-slate-400 '>Branding</h1> */}
                            <BsArrowUpRight className='text-transparent hover:text-[#EF4823] text-5xl font-bold'/>
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