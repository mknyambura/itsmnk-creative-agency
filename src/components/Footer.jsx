import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col gap-8 m-16'>
        <div className='flex flex-col bg-[#2A2A2A] h-[1px]  items-center justify-center'></div>
        <div className='flex flex-row justify-between '>
            <div className='flex flex-row gap-8 text-lg font-semibold'>
                <h1>About</h1>
                <h1>Services</h1>
                <Link to='/project'>Project</Link>
                <h1>Contact</h1>
            </div>
            <div className='flex flex-row gap-8'>
                <BsInstagram/>
                <BsLinkedin/>
                <BsFacebook/>
                <BsTwitter/>
            </div>
        </div>
        <div className='flex flex-row justify-between font-extralight text-[#1C1A1D]'>
            <p>© 2022 ITSMNK Agency by Mercy Faith Nyambura Kariuki</p>
            <div className='flex flex-row justify-between gap-8'>
                <h1>Privacy Policy</h1>
                <h1>Terms & Agreements</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer