import { connectToDatabase } from "@/lib/mongoose";
import Heading from "@/components/typography/Heading";
import CourseItemDaisyUI from '@/components/course/CourseItemDaisyUI'
import CourseItem from "@/components/course/CourseItem";

export default async function Home() {
const connect = connectToDatabase()
console.log("Connect to DB: ", connect)
  return (
    <main>
    <Heading><h1 className="text-3xl font-bold">Explore Learning Platform</h1></Heading>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
    <CourseItem />
    <CourseItem />
    <CourseItem />
    <CourseItem />
    </div>  
    </main>
    
  );
}
