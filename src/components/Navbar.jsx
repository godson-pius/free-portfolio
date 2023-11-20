import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <nav className='w-full flex items-center justify-end pt-7 px-14'>
        <section className='lg:flex items-center gap-7 text-lg font-medium hidden'>
          <Link className='hover:scale-110 duration-500 transition' to='/'>Works</Link>
          <Link className='hover:scale-110 duration-500 transition' to='/blog'>Blog</Link>
          <Link className='hover:scale-110 duration-500 transition' to='/contact'>Contact</Link>
        </section>

        {!showMenu ? (
          <IoMenu size={35} className='lg:hidden cursor-pointer' onClick={() => setShowMenu(true)} />
        ) : null}
      </nav>

      {/* Mobile Menu */}
      {showMenu ? (
        <nav className='flex justify-between h-screen absolute w-96 px-6 p-5 text-white bg-[#FF6464] top-0 rounded-r-3xl'>
          <section className='flex flex-col items-center gap-2 text-lg font-medium'>
            <Link className='hover:scale-110 duration-500 transition' to='/'>Works</Link>
            <Link className='hover:scale-110 duration-500 transition' to='/blog'>Blog</Link>
            <Link className='hover:scale-110 duration-500 transition' to='/contact'>Contact</Link>
          </section>

          <span className='text-2xl hover:text-red-800 hover:text-3xl duration-700 transition cursor-pointer' onClick={() => setShowMenu(false)}>
            &times;
          </span>
        </nav>
      ) : null}
    </>
  )
}

export default Navbar