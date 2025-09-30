import Blog from '@/component/Blog/Blog'
import BreadCrumb from '@/component/BreadCrumb'

import React from 'react'

const blogpage = () => {
  return (
    <>
    <BreadCrumb title="Our Blogs" subpage="false" image="/images/service/teer/bread.png" />
    <Blog/>
    </>
  )
}

export default blogpage