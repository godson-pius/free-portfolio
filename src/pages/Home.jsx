import React from 'react'
import Hero from '../components/Hero'
import RecentPosts from '../components/RecentPosts'
import FeaturedWorks from '../components/FeaturedWorks'

const Home = () => {
  return (
    <>
        <main>
            <Hero />
            <RecentPosts />
            <FeaturedWorks />
        </main>
    </>
  )
}

export default Home