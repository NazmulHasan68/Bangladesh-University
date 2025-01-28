import React from 'react'
import BlogHeroSection from '../components/pages Component/BlogsComponent/BlogHeroSection'
import BlogMainPart from '../components/pages Component/BlogsComponent/BlogMainPart'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Blogs() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <BlogHeroSection/>
            <BlogMainPart/>
          </div>
          <Footer/>
        </div>
  )
}
