import { connectToDatabase } from "@/lib/mongoose";
import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";

export default async function Home() {
// const connect = connectToDatabase()
// console.log("Connect to DB: ", connect)
  return (
    <main>
    <Heading><h1 className="text-3xl font-bold">Explore Learning Platform</h1></Heading>
    <CourseGrid>
    <CourseItem />
    <CourseItem />
    <CourseItem />
    </CourseGrid>  
    </main>
    
  );
}
