import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import Header from './Header'
import Footer from './Footer'

import { BsArrowDownRightCircle } from 'react-icons/bs'
import { GiFlowerStar } from 'react-icons/gi'
import { TiStarburst } from 'react-icons/ti'

import video1 from '../images/video1.png'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import badge from '../images/badge.png'
import { Link } from 'react-router-dom'

function Home() {
    const [counterOn, setCounterOn] = useState(false)

  return (
    <div>
        <Header/>
        <div className='flex flex-row mt-22 ml-16 mr-16 mb-16 '>
            <h1 className='uppercase text-9xl font-bold'>Creative Agency</h1>
            <div className='flex flex-col gap-8 justify-between w-3/4'>
                <div className='flex'>
                    <img src={video1} alt="" />
                </div>
                <p className='text-xl'>The art of visual communication, creatively impacting the world around us-one good design at a time, design like you mean it!</p>
            </div>
        </div>
        <div className='flex flex-row m-16 items-center gap-4'>
            <button disabled='disabled' className='border border-slate-600 rounded-[30px] px-[20px] py-[1px]'>2022 Best Agency</button>
            <button disabled='disabled' className='border border-slate-600 rounded-[30px] px-[20px] py-[1px]'>World Class Agency</button>
            <div className='bg-[#2A2A2A] h-[1px] w-[60%]'></div>
        </div>
        <div className='flex flex-row justify-between gap-8 items-center m-16'>
            <div className='flex flex-col gap-12 m-8'>
                <BsArrowDownRightCircle className='text-[#EF4823] text-8xl font-extralight'/>
                <p>We are an Creative agency, based in New York. Vision Every company is performing best online. Mission Helping businesses to find the perfect and most succesful strategy, to be online.</p>
                <button className='bg-[#EF4823] px-1 py-1 rounded-[30px]'>
                    <button className='flex flex-row text-white font-bold gap-4 bg-transparent rounded-[30px] px-4 py-1 border border-white'>
                        Get Started!
                        <GiFlowerStar className='text-5xl'/>
                    </button>
                </button>
            </div>
            <div className='flex flex-col m-8'>
                <h1 className='text-[#EF4823] font-bold text-3xl gap-8 mb-6'>What makes us special</h1>
                <p>
                    Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business. We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals. In every campaign and project, the results we aim to achieve are clear, the measures are clear and most importantly we are transparent throughout.
                </p>
            </div>
            <div className='flex flex-col m-8'>
                <h1 className='text-[#EF4823] font-bold text-3xl gap-8 mb-6'>Our purpose</h1>
                <p>
                Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business. We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals. In every campaign and project, the results we aim to achieve are clear, the measures are clear and most importantly we are transparent throughout.
                </p>
            </div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    <div className='flex flex-col items-center m-10'>
                        <h1 className='font-bold text-7xl'>
                            {counterOn && 
                                <CountUp start={0} end={30} duration={5} delay={0}/>
                            }
                        k<span className='text-[#EF4823]'>+</span>
                        </h1>
                        <p className='text-xl font-semibold text-[#EF4823]'>Project Completed</p>
                    </div>

                    <div className='flex flex-col items-center m-10'>
                        <h1 className='font-bold text-7xl'>
                            {counterOn && 
                                <CountUp start={0} end={70} duration={5} delay={0}/>
                            }
                        k
                        </h1>
                        <p className='text-xl font-semibold text-[#EF4823]'>Clients</p>
                    </div>

                    <div className='flex flex-col items-center m-10'>
                        <h1 className='font-bold text-7xl'>
                            {counterOn && 
                                <CountUp start={0} end={100} duration={5} delay={0}/>
                            }
                        k
                        </h1>
                        <p className='text-xl font-semibold text-[#EF4823]'>Customers</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
        <div className='bg-[#1C1A1D]'>
            <div className='flex flex-col items-center m-16'>
                <div className='flex flex-row justify-between m-16 items-center'>
                    <div className='flex-flex-col w-1/2 gap-8'>
                        <h1 id='services' className='text-8xl text-[#C4C4C4] font-bold uppercase'>Our Services</h1>
                        <p className='text-[#5F5F5F] mt-8'>
                            Every one of us loves something different. So, explore the world through the lens of our visual capabilitie, and find what you love
                        </p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 w-1/4 items-center justify-center'>
                        <button className='text-[#C4C4C4] border border-[#C4C4C4] bg-transparent px-4 py-2 rounded-[20px]'>Design</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Development</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Digital Marketing</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>SEO</button>
                    </div>
                </div>
                <div className='bg-[#5F5F5F] h-[1px] w-3/4 '></div>
            </div>
            <div className='flex flex-col items-center ml-24 mr-24 mt-24'>
                {/* <h1 className='text-[#C4C4C4] text-7xl font-bold'>UI/UX Design</h1> */}
                <div className='w-full flex flex-col relative bg-transparent'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer text-[#C4C4C4] text-7xl font-bold flex items-center h-[50px] mx-[20px]'>UI/UX Design</label>
                    <div className='flex flex-col absolute right-[30px] top-[-50px] rotate-0 peer-checked:rotate-180'>
                        <BsArrowDownRightCircle className='text-9xl text-[#EF4823]'/>
                    </div>
                    <div className='m-16 items-center flex flex-row justify-between max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <div className='flex flex-row flex-wrap gap-4 w-1/4 items-center justify-center'>
                            <button className='text-[#C4C4C4] border border-[#C4C4C4] bg-transparent px-4 py-2 rounded-[20px]'>Design</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Development</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Digital Marketing</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>SEO</button>
                        </div>
                        <p className='w-1/2 text-[#C4C4C4]'>
                            As a design development agency for both web and mobile applications, our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                        </p>
                    </div>
                </div>
                <div className='bg-[#5F5F5F] h-[1px] w-3/4 mb-16'></div>

                
                <div className='w-full flex flex-col relative bg-transparent '>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer text-[#C4C4C4] text-7xl font-bold flex items-center h-[50px] mx-[20px]'>Brand Design</label>
                    <div className='flex flex-col absolute right-[30px] top-[-50px] rotate-0 peer-checked:rotate-180'>
                        <BsArrowDownRightCircle className='text-9xl text-[#EF4823]'/>
                    </div>
                    <div className='m-16 items-center flex flex-row justify-between max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <div className='flex flex-row flex-wrap gap-4 w-1/4 items-center justify-center'>
                            <button className='text-[#C4C4C4] border border-[#C4C4C4] bg-transparent px-4 py-2 rounded-[20px]'>Design</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Development</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Digital Marketing</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>SEO</button>
                        </div>
                        <p className='w-1/2 text-[#C4C4C4]'>
                            As a design development agency for both web and mobile applications, our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                        </p>
                    </div>
                </div>
                <div className='bg-[#5F5F5F] h-[1px] w-3/4 mb-16'></div>


                <div className='w-full flex flex-col relative bg-transparent '>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer text-[#C4C4C4] text-7xl font-bold flex items-center h-[50px] mx-[20px]'>Graphic Design</label>
                    <div className='flex flex-col absolute right-[30px] top-[-50px] rotate-0 peer-checked:rotate-180'>
                        <BsArrowDownRightCircle className='text-9xl text-[#EF4823]'/>
                    </div>
                    <div className='m-16 items-center flex flex-row justify-between max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <div className='flex flex-row flex-wrap gap-4 w-1/4 items-center justify-center'>
                            <button className='text-[#C4C4C4] border border-[#C4C4C4] bg-transparent px-4 py-2 rounded-[20px]'>Design</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Development</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Digital Marketing</button>
                            <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>SEO</button>
                        </div>
                        <p className='w-1/2 text-[#C4C4C4]'>
                            As a design development agency for both web and mobile applications, our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                        </p>
                    </div>
                </div>
                <div className='bg-[#5F5F5F] h-[1px] w-3/4 mb-16'></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col gap-8 m-16 '>
                    <div className='flex flex-row justify-between'>
                        <h1 className='uppercase text-8xl text-[#EF4823] font-bold'>Project</h1>
                        <p className='w-1/4 text-[#C4C4C4]'>Creative fuels design, design fuels creativity, be here for more, are you in love with a creative?</p>
                    </div>
                    <div className='flex flex-row gap-4 items-center '>
                        <button className='text-[#C4C4C4] border border-[#C4C4C4] bg-transparent px-4 py-2 rounded-[20px]'>Design</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Development</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>Digital Marketing</button>
                        <button className='text-[#5F5F5F] border border-[#5F5F5F] bg-transparent px-4 py-2 rounded-[20px]'>SEO</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row flex-wrap gap-8 m-16'>
                {/* <Link to='/project'> */}
                    <div className='relative'>
                        <div>
                            <img src={project1} alt="" className='h-full w-full object-cover group-hover:rotate-3 hover:scale-125 transition-transform'/>
                        </div>
                        <div className='absolute inset-0 opacity-80  hover:bg-black/70'>

                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[38%] hover:translate-y-0 transition-all'>
                                <h1 className='font-bold text-3xl text-transparent hover:text-white'>Project Name</h1>
                                <Link to='/project' className='rounded-full bg-transparent hover:bg-neutral-900 py-2 px-3.5 text-sm capitalize text-transparent hover:text-white'>See More</Link>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}

                {/* <Link to='/project'> */}
                    <div className='relative'>
                        <div>
                            <img src={project2} alt="" className='h-full w-full object-cover group-hover:rotate-3 hover:scale-125 transition-transform'/>
                        </div>
                        <div className='absolute inset-0 opacity-80  hover:bg-black/70'>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[-48%] hover:translate-y-0 transition-all'>
                                <h1 className='font-bold text-3xl text-transparent hover:text-white'>Project Name</h1>
                                <Link to='/project' className='rounded-full bg-transparent hover:bg-neutral-900 py-2 px-3.5 text-sm capitalize text-transparent hover:text-white'>See More</Link>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}

                {/* <Link to='/project'> */}
                    <div className='relative'>
                        <div>
                            <img src={project3} alt="" className='h-full w-full object-cover group-hover:rotate-3 hover:scale-125 transition-transform'/>
                        </div>
                        <div className='absolute inset-0 opacity-80  hover:bg-black/70'>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[-48%] hover:translate-y-0 transition-all'>
                                <h1 className='font-bold text-3xl text-transparent hover:text-white'>Project Name</h1>
                                <Link to='/project' className='rounded-full bg-transparent hover:bg-neutral-900 py-2 px-3.5 text-sm capitalize text-transparent hover:text-white'>See More</Link>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}

                {/* <Link to='/project'> */}
                    <div className='relative'>
                        <div>
                            <img src={project4} alt="" className='h-full w-full object-cover group-hover:rotate-3 hover:scale-125 transition-transform'/>
                        </div>
                        <div className='absolute inset-0 opacity-80  hover:bg-black/70'>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[-48%] hover:translate-y-0 transition-all'>
                                <h1 className='font-bold text-3xl text-transparent hover:text-white'>Project Name</h1>
                                <Link to='/project' className='rounded-full bg-transparent hover:bg-neutral-900 py-2 px-3.5 text-sm capitalize text-transparent hover:text-white'>See More</Link>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}

                {/* <Link to='/project'> */}
                    <div className='relative'>
                        <div>
                            <img src={project5} alt="" className='h-full w-full object-cover group-hover:rotate-3 hover:scale-125 transition-transform'/>
                        </div>
                        <div className='absolute inset-0 opacity-80  hover:bg-black/70'>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[-48%] hover:translate-y-0 transition-all'>
                                <h1 className='font-bold text-3xl text-transparent hover:text-white'>Project Name</h1>
                                <Link to='/project' className='rounded-full bg-transparent hover:bg-neutral-900 py-2 px-3.5 text-sm capitalize text-transparent hover:text-white'>See More</Link>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
            </div>
            <div className='h-6'></div>
        </div>
        <div className='flex flex-row items-center justify-between m-16'>
            <h1 className='w-1/2 font-bold uppercase text-8xl'>Let’s start something new together</h1>
            <div className='flex'>
                <img src={badge} alt="" />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home