import React from 'react'
import LibraryHeroSection from '../components/pages Component/Library.component/LibraryHeroSection'
import LibraryBookDisplay from '../components/pages Component/Library.component/LibraryBookDisplay'
import LibraryCollections from '../components/pages Component/Library.component/LibraryCollections'
import LibraryResourse from '../components/pages Component/Library.component/LibraryResourse'
import LibraryDocument from '../components/pages Component/Library.component/LibraryDocument'
import LibraryLibrarian from '../components/pages Component/Library.component/LibraryLibrarian'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Library() {
  return (
      <div>
          <Navigation/>
          <div className='mt-16 md:mt-24'>
            <LibraryHeroSection/>
            <LibraryBookDisplay/>
            <LibraryCollections/>
            <LibraryResourse/>
            <LibraryDocument/>
            <LibraryLibrarian/>
          </div>
          <Footer/>
      </div>
  )
}
