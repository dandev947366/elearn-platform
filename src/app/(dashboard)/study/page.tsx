import React from 'react'
import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";
const page = () => {
  return (
  <div>
    <Heading><h1 className="text-3xl font-bold"> Study Zone</h1></Heading>
    <CourseGrid>
    <CourseItem />
    <CourseItem />
    <CourseItem />
    </CourseGrid>  
    </div>
  )
}

export default page