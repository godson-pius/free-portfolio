import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
const Footer = () => {
  return (
    <>
        <footer className='w-full flex flex-col items-center justify-center mt-28 mb-10'>
            <div className="socials flex gap-5 items-center">
                <IoLogoFacebook size={30} color='#21243D' />
                <IoLogoInstagram size={30} color='#21243D' />
                <IoLogoTwitter size={30} color='#21243D' />
                <IoLogoLinkedin size={30} color='#21243D' />
            </div>
            <p className='text-xs mt-4'>Copyright ©2020 All rights reserved </p>
        </footer>
    </>
  )
}

export default Footer