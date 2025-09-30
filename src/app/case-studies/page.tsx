import React from 'react'
import BreadCrumb from '@/component/BreadCrumb'
import CaseStudy from '@/component/CaseStudy/CaseStudy'

const casestudiespage = () => {
  return (
    <>
    <BreadCrumb title="Case Studies" subpage='false' image="/images/service/teer/bread.png"/>
    <CaseStudy/>
    </>
  )
}

export default casestudiespage