import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import ExamControllerComponent from '../../components/pages Component/Admistration/ExamController/ExamControllerComponent'

export default function ExamController() {
  return (
    <div>
      <Navigation/>
      <div className='mt-16 md:mt-24'>
        <ExamControllerComponent/>
      </div>
      <Footer/>
    </div>
  )
}
