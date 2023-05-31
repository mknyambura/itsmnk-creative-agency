import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-row justify-between m-16'>
        <Link to='/' className='uppercase font-bold text-2xl'>itsmnk</Link>
        <div className='flex flex-row gap-12'>
            <h1 className='font-bold'>About</h1>
            <h1 className='font-bold'>Services</h1>
            <Link to='/project' className='font-bold'>Project</Link>
            <Link to='/team' className='font-bold'>Teams</Link>
        </div>
    </div>
  )
}

export default Header