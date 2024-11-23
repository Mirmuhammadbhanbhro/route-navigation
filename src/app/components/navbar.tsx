import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center p-6 bg-blue-500'>
        <div>
            <h1 className='text-2xl'>Mir Muhammad</h1>
        </div>
        <div>
            <ul className='flex space-x-6 text-xl'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar