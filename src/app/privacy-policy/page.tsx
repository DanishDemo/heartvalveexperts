import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import PrivacyPolicy from '@/component/PrivacyPolicy'

const privacypolicypage = () => {
  return (
    <>
    <BreadCrumb title="Privacy Policy" subpage="false" image="/images/contact.png" />

    <PrivacyPolicy/>
    </>
  )
}

export default privacypolicypage