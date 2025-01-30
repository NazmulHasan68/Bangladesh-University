import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import PolicyComponent from '../../components/pages Component/Admission/Policy/PlicyComponent'

export default function Policy() {
  return (
    <div>
        <Navigation/>
        <div className='mt-16 md:mt-20'>
            <PolicyComponent/>
        </div>
        <Footer/>
  </div>
  )
}
