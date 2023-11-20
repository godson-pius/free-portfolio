import React from 'react'
import { Link } from 'react-router-dom'

const RecentPosts = () => {
    return (
        <>
            <main className='w-full px-10 lg:px-36 bg-[#EDF7FA] p-10 mt-16'>

                <div className="top flex items-center justify-between">
                    <h1 className='text-xl font-thin text-[#21243D]'>Recent posts</h1>
                    <Link to='/all-posts' className='text-[#00A8CC] text-sm'>View all</Link>
                </div>

                <section className='mt-3 flex flex-col md:flex-row items-center gap-4'>
                    <div className='bg-white p-7 rounded'>
                        <h1 className='font-bold text-xl'>Making a design system from scratch</h1>
                        <div className='flex items-center divide-x divide-black my-4'>
                            <p className='pr-5'>12 Feb 2020</p>
                            <p className='pl-5'>Design, Pattern</p>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className='bg-white p-7 rounded'>
                        <h1 className='font-bold text-xl'>Creating pixel perfect icons in Figma</h1>
                        <div className='flex items-center divide-x divide-black my-4'>
                            <p className='pr-5'>12 Feb 2020</p>
                            <p className='pl-5'>Figma, Icon Design</p>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </section>

            </main>
        </>
    )
}

export default RecentPosts