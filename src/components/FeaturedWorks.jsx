import React from 'react'
import fimag1 from '../assets/fimg1.png'
import fimag2 from '../assets/fimg2.png'
import fimag3 from '../assets/fimg3.png'

const FeaturedWorks = () => {
    return (
        <>
            <main className='w-full px-10 lg:px-36 mt-7'>
                <h1 className='text-xl font-thin text-[#21243D]'>Featured Works</h1>

                <section className='my-10 flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row gap-5 border-b-[1px] pb-4 lg:items-center'>
                        <img src={fimag1} alt="Featured Works" />
                        <div>
                            <h1 className='text-2xl font-bold'>Designing Dashboards</h1>
                            <div className='flex flex-col lg:flex-row mt-4 gap-5 lg:items-center'>
                                <p className='bg-[#142850] text-white rounded-full w-16 flex items-center justify-center p-1'>2020</p>
                                <p className='text-gray-400'>Dashboard</p>
                            </div>
                            <p className='mt-4 text-sm font-thin lg:w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus eos fugit ipsum? Quod iusto voluptatum quis delectus, nemo fugiat ipsa tempore repellat dolore voluptate saepe fugit incidunt dolores magni.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 border-b-[1px] pb-4 lg:items-center'>
                        <img src={fimag2} alt="Featured Works" />
                        <div>
                            <h1 className='text-2xl font-bold'>Vibrant Portraits of 2020</h1>
                            <div className='flex flex-col lg:flex-row mt-4 gap-5 lg:items-center'>
                                <p className='bg-[#142850] text-white rounded-full w-16 flex items-center justify-center p-1'>2018</p>
                                <p className='text-gray-400'>Illustration</p>
                            </div>
                            <p className='mt-4 text-sm lg:w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus eos fugit ipsum? Quod iusto voluptatum quis delectus, nemo fugiat ipsa tempore repellat dolore voluptate saepe fugit incidunt dolores magni.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 border-b-[1px] pb-4 lg:items-center'>
                        <img src={fimag3} alt="Featured Works" />
                        <div>
                            <h1 className='text-2xl font-bold'>36 Days of Malayalam type</h1>
                            <div className='flex flex-col lg:flex-row mt-4 gap-5 lg:items-center'>
                                <p className='bg-[#142850] text-white rounded-full w-16 flex items-center justify-center p-1'>2020</p>
                                <p className='text-gray-400'>Typography</p>
                            </div>
                            <p className='mt-4 text-sm lg:w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus eos fugit ipsum? Quod iusto voluptatum quis delectus, nemo fugiat ipsa tempore repellat dolore voluptate saepe fugit incidunt dolores magni.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default FeaturedWorks