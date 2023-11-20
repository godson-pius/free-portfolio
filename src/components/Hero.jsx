import React from 'react'
import heroImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <>
        <main className='w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-10 lg:px-36 pt-40'>
            <section className="left text-center md:text-left mt-10 md:mt-0">
                <h1 className='text-4xl font-extrabold text-[#21243D]'>Hi, i am John,</h1>
                <h1 className='text-4xl font-extrabold text-[#21243D]'>Creative Technologist</h1>
                <p className='w-96 md:w-[40rem] my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit rem quasi nesciunt qui? Voluptatem, quo obcaecati velit mollitia nulla, magni aspernatur sit natus adipisci iure magnam quis assumenda, totam libero.</p>

                <button className='bg-[#FF6464] rounded p-3 text-white'>Download Resume</button>
            </section>
            
            <img src={ heroImage } alt="Hero Image" className='w-[300px]' />
        </main>
    </>
  )
}

export default Hero