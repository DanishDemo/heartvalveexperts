import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import ContactSection from '@/component/ContactSection'

const contactpage = () => {
  return (
    <>
     <BreadCrumb title="Contact Us" subpage="false" image="/images/contact.png" />
     <ContactSection/>
    </>
  )
}

export default contactpage