import React from 'react'
import ContactHeoSection from '../components/pages Component/Contact.component/ContactHeoSection'
import ContactBUaddress from '../components/pages Component/Contact.component/ContactBUaddress'
import ContactDepartmet from '../components/pages Component/Contact.component/ContactDepartmet'
import Versitymap from '../components/pages Component/Contact.component/Versitymap'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Contact() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <ContactHeoSection/>
            <ContactBUaddress/>
            <ContactDepartmet/>
            <Versitymap/>
          </div>
          <Footer/>
        </div>
  )
}
