import React from 'react'

const CourseGrid = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">{children}</div>
  )
}

export default CourseGrid