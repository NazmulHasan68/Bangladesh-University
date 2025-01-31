import React from 'react'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'
import { CertificateConfirmBox } from '../components/pages Component/Certificate.component/CertificateConfirmBox'

export default function Certificate() {
  return (
    <div>
    <Navigation/>
    <main className='mt-10 md:mt-20 w-screen h-screen flex justify-center items-center'>
      <CertificateConfirmBox/>
    </main>
    <Footer/>
  </div>
  )
}
